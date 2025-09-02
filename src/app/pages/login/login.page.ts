import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ToastService } from 'src/app/shared/service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.toastService.presentToast('Inicio de sesión exitoso');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          const message = err.error?.message || 'Error en el inicio de sesión. Por favor, inténtalo de nuevo.';
          this.toastService.presentToast(message, 'danger');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
