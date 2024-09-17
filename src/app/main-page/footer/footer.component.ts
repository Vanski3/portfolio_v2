import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { RouterLink, RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  langBoolean = inject(TranslationService);
  private router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
         // Check if the URL has a fragment (e.g., #contact, #imprint)
        const urlFragment = this.router.url.split('#')[1]; 
        
         // Scroll to the top only if no fragment is used
        if (!urlFragment) {
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 100); 
        }
      }
    });
  }
}
