import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/shared/interface/auth-response.interface';
import { User } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

  onRegister(user: User) {
    this.userService.register(user).subscribe({
      next: (res: AuthResponse) => {
        console.log('Registro exitoso:', res);
      },
      error: (err) => {
        console.error('Error en el registro:', err);
      }
    });
  }

}
