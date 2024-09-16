import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { PrivacyComponent } from '../privacy/privacy.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule, TranslateModule, HeaderComponent, PrivacyComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  langBoolean = inject(TranslationService);
}
