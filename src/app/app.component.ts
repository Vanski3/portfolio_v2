import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./main-page/main-components/landing-page/landing-page.component";
import { AboutMeComponent } from "./main-page/main-components/about-me/about-me.component";
import { SkillsComponent } from './main-page/main-components/skills/skills.component';
import { PortfolioComponent } from './main-page/main-components/portfolio/portfolio.component';
import { ReferencesComponent } from './main-page/main-components/references/references.component';
import { ContactComponent } from './main-page/main-components/contact/contact.component';
import { FooterComponent } from './main-page/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_v2';
}
