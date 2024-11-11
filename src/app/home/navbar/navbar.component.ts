import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  get userStatus(): string {
    return this.authService.isAdmin() ? 'Librarian' : 'Member';
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  handleLogOut() {
    this.authService.logout();
  }
}
