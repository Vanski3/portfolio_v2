import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(public translateService: TranslateService) {}

  english = true;
  german = false;
  russian = false;

  changeLanguageService(langCode: string) {
    this.translateService.use(langCode);

    if (langCode === 'en') {
      this.english = true;
      this.german = false;
      this.russian = false;
    } else if (langCode === 'de') {
      this.english = false;
      this.german = true;
      this.russian = false;
    } else if (langCode === 'ru') {
      this.english = false;
      this.german = false;
      this.russian = true;
    }
  }
}
