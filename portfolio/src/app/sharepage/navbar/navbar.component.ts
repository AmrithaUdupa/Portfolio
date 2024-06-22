// navbar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../shared/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService, private router: Router) {}

  scrollTo(section: string) {
    this.router.navigate([], { fragment: section }).then(() => {
      this.scrollService.scrollToSection(section);
    });
  }
}
