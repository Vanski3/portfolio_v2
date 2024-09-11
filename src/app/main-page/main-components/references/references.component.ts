import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

interface Reference {
  text: string;
  name: string;
  jobTitle: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements AfterViewInit {
  references: Reference[] = [
    {
      text: "Working with Vanessa on our programming project was a delight. Her humorous and easy-going nature created a positive team environment. Vanessa's ability to maintain a relaxed atmosphere while delivering quality work was truly impressive.",
      name: "P. Nehlsen",
      jobTitle: "Team Partner",
    },
    {
      text: "Vanessa consistently demonstrated a high level of dedication and expertise in her work. Her strong team spirit made her a valuable asset to our team. I highly recommend Vanessa.",
      name: "R. Lochschmidt",
      jobTitle: "Team Partner",
    },
    {
      text: 'Next reference',
      name: 'Future Contributor',
      jobTitle: '',
    },
  ];

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