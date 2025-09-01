import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptProvider {
  hashPassword(password: string): string {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  }

  validateHash(password: string, hash: string): boolean {
    return this.hashPassword(password) === hash;
  }
}
