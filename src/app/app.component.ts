import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './main-page/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './main-page/header/header.component';
import { MainComponentsComponent } from './main-page/main-components/main-components.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent, HeaderComponent, MainComponentsComponent, TranslateModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_v2';

  ngOnInit(): void {
    AOS.init();
  }
}
