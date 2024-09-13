import { Component, AfterViewInit, inject } from '@angular/core';
import Splide from '@splidejs/splide';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { take } from 'rxjs/operators'; 


interface Reference {
  text: string;
  name: string;
  jobTitle: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements AfterViewInit {

  private translate = inject(TranslateService);  // injecte TranslateService

  references: Reference[] = [
    {
      text: '',
      name: '',
      jobTitle: '',
    },
    {
      text: '',
      name: '',
      jobTitle: '',
    },
    {
      text: '',
      name: '',
      jobTitle: '',
    },
  ];

  constructor() {
    this.loadTranslations();  // Lade die Übersetzungen beim Start
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();  // Lade die Übersetzungen neu, wenn sich die Sprache ändert
    });
  }

  loadTranslations() {
    // Lade die erste Referenz
    this.translate.get('references.reference1.text').pipe(take(1)).subscribe((res) => {
      this.references[0].text = res;
    });
    this.translate.get('references.reference1.name').pipe(take(1)).subscribe((res) => {
      this.references[0].name = res;
    });
    this.translate.get('references.reference1.jobTitle').pipe(take(1)).subscribe((res) => {
      this.references[0].jobTitle = res;
    });

    // Lade die zweite Referenz
    this.translate.get('references.reference2.text').pipe(take(1)).subscribe((res) => {
      this.references[1].text = res;
    });
    this.translate.get('references.reference2.name').pipe(take(1)).subscribe((res) => {
      this.references[1].name = res;
    });
    this.translate.get('references.reference2.jobTitle').pipe(take(1)).subscribe((res) => {
      this.references[1].jobTitle = res;
    });

    // Lade die nächste Referenz
    this.translate.get('references.nextReference.text').pipe(take(1)).subscribe((res) => {
      this.references[2].text = res;
    });
    this.translate.get('references.nextReference.name').pipe(take(1)).subscribe((res) => {
      this.references[2].name = res;
    });
    this.translate.get('references.nextReference.jobTitle').pipe(take(1)).subscribe((res) => {
      this.references[2].jobTitle = res;
    });
  }

  ngAfterViewInit(): void {
    var splide = new Splide('.splide', {
      type: 'loop',
      gap: '4rem',
      focus: 'center',
      pagination: true,
      arrows: false, 
      padding: {
        left: '20%',
        right: '20%',
      },
      breakpoints: {
        960: {
          gap: '2rem',
        },
        768: {
          gap: '0.1rem',
          padding: {
            left: '3%',
            right: '5%',
          },
        },
      },
    });
  
    document.querySelector('.custom-arrow--prev')!.addEventListener('click', () => {
      splide.go('<');
    });
  
    document.querySelector('.custom-arrow--next')!.addEventListener('click', () => {
      splide.go('>');
    });
  
    splide.mount();
  }
}
