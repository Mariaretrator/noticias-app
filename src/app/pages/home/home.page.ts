import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isSidebarVisible = false;

  constructor(private router: Router, private authService: AuthService) {}

  onProfileClick() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  onSidebarOption(option: string) {
    this.isSidebarVisible = false;
    if (option === 'profile') {
      this.router.navigate(['/profile']);
    } else if (option === 'logout') {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
