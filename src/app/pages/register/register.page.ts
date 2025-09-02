import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/interface/user.interface';
import { AuthService } from '../../shared/service/auth.service';
import { ToastService } from '../../shared/service/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  onRegister(user: User) {
    this.authService.register(user).subscribe({
      next: () => {
        this.toastService.presentToast('Registro exitoso', 'success');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        const message = err.error?.message || 'Error en el registro. Por favor, inténtalo de nuevo.';
        this.toastService.presentToast(message, 'danger');
      }
    });
  }
}
