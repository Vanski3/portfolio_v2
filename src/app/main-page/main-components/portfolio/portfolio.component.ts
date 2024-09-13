import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { TranslationService } from '../../../translation.service';
import { take } from 'rxjs/operators'; 

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  private translate = inject(TranslateService);  
  
  projects = [
    {
      index: '01',
      name: 'Join',
      description: '',
      technologies: [
        { name: 'HTML', icon: './../../../../assets/img/portfolio/html-small.svg' },
        { name: 'CSS', icon: './../../../../assets/img/portfolio/css-small.svg' },
        { name: 'Firebase', icon: './../../../../assets/img/portfolio/firebase-small.svg' },
        { name: 'TypeScript', icon: './../../../../assets/img/portfolio/typescript-small.svg' }
      ],
      image: './../../../../assets/img/portfolio/join-dialog.png',
      links: [
        { name: '', url: 'https://github.com/Vanski3/join' },
        { name: '', url: 'https://vanessa-sachs.com/join' }
      ]
    },
    {
      index: '02',
      name: 'El Pollo Loco',
      description: '',
      technologies: [
        { name: 'HTML', icon: './../../../../assets/img/portfolio/html-small.svg' },
        { name: 'CSS', icon: './../../../../assets/img/portfolio/css-small.svg' },
        { name: 'JavaScript', icon: './../../../../assets/img/portfolio/javascript-small.svg' }
      ],
      image: './../../../../assets/img/portfolio/elp-dialog.png',
      links: [
        { name: '', url: 'https://github.com/Vanski3/elp' },
        { name: '', url: 'https://vanessa-sachs.com/el-pollo-loco' }
      ]
    }
  ];

  selectedProject = this.projects[0];
  isDialogOpen = false;

  constructor() {
    this.loadTranslations();  // Lade die Übersetzungen beim Start
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();  // Lade die Übersetzungen neu, wenn sich die Sprache ändert
    });
  }

  loadTranslations() {
    // Projekte werden nacheinander übersetzt
    this.translate.get('portfolio.projects.join.description').pipe(take(1)).subscribe((res) => {
      this.projects[0].description = res;
    });
    this.translate.get('portfolio.projects.join.github').pipe(take(1)).subscribe((res) => {
      this.projects[0].links[0].name = res;
    });
    this.translate.get('portfolio.projects.join.liveTest').pipe(take(1)).subscribe((res) => {
      this.projects[0].links[1].name = res;
    });

    this.translate.get('portfolio.projects.elPolloLoco.description').pipe(take(1)).subscribe((res) => {
      this.projects[1].description = res;
    });
    this.translate.get('portfolio.projects.elPolloLoco.github').pipe(take(1)).subscribe((res) => {
      this.projects[1].links[0].name = res;
    });
    this.translate.get('portfolio.projects.elPolloLoco.liveTest').pipe(take(1)).subscribe((res) => {
      this.projects[1].links[1].name = res;
    });
  }

  openProject(project: any) {
    this.selectedProject = project;
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  nextProject() {
    const currentIndex = this.projects.indexOf(this.selectedProject);
    this.selectedProject = this.projects[(currentIndex + 1) % this.projects.length];
  }
}
