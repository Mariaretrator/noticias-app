import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interface/user.interface';
import { AuthResponse } from '../interface/auth-response.interface';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USERS_KEY = 'app_users';
  private readonly TOKEN_KEY = 'auth_token';

  constructor() { }


  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  private saveAuthData(response: AuthResponse): void {
    localStorage.setItem(this.TOKEN_KEY, response.token);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }



  private readUsers(): { users: User[] } {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    if (!usersJson) return { users: [] };
    return JSON.parse(usersJson);
  }

  private writeUsers(data: { users: User[] }): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(data));
  }


  register(user: User): Observable<AuthResponse> {
    let data = this.readUsers();
    const exists = data.users.find(u => u.email === user.email);
    if (exists) {
      return throwError(() => new Error('Usuario ya registrado'));
    }

    const newUser: User = {
      id: this.uuidv4(),
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: CryptoJS.SHA256(user.password).toString(CryptoJS.enc.Hex),
      country: user.country
    };

    data.users.push(newUser);
    this.writeUsers(data);

    const response: AuthResponse = {
      token: this.uuidv4(), 
      expiresIn: 3600,
      user: newUser
    };

    return of(response).pipe(
      tap(res => this.saveAuthData(res)) 
    );
  }

  login(credentials: Pick<User, 'email' | 'password'>): Observable<AuthResponse> {
    const { email, password } = credentials;
    let data = this.readUsers();
    const user = data.users.find(u => u.email === email);

    if (!user) {
      return throwError(() => new Error('Usuario no encontrado'));
    }

    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    if (user.password !== hashedPassword) {
      return throwError(() => new Error('Credenciales inválidas'));
    }

    const response: AuthResponse = {
      token: this.uuidv4(),
      expiresIn: 3600,
      user
    };
    
    return of(response).pipe(
      tap(res => this.saveAuthData(res)) 
    );
  }

  private uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
