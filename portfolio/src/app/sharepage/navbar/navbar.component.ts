// navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../shared/scroll.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService, private router: Router , private authService:AuthService) {}

  scrollTo(section: string) {
    this.router.navigate([], { fragment: section }).then(() => {
      this.scrollService.scrollToSection(section);
    });
  }


  onLogout() {
    this.authService.Logout();
    this.router.navigate(['/login-signup']);
  }

}
