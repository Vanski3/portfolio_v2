import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHovered = false;
  menuOpen = false;
  isMobile = window.innerWidth <= 780;

  selectedLanguage = 'EN';

  constructor(public translateService: TranslateService, public translationService: TranslationService) { }

  langBoolean = inject(TranslationService);

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.langBoolean.changeLanguageService(lang);
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  closeMenuOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-container')) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 780;
    if (!this.isMobile) {
      this.menuOpen = false;
    }
  }
}
