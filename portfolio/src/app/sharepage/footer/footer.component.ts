import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../shared/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private scrollService: ScrollService, private router: Router) {}

  scrollTo(section: string) {
    this.router.navigate([], { fragment: section }).then(() => {
      this.scrollService.scrollToSection(section);
    });
  }
}
