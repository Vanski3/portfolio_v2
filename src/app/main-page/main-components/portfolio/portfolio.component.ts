import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = [
    {
      index: '01',
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: [
        { name: 'HTML', icon: './../../../../assets/img/portfolio/html-small.svg' },
        { name: 'CSS', icon: './../../../../assets/img/portfolio/css-small.svg' },
        { name: 'Firebase', icon: './../../../../assets/img/portfolio/firebase-small.svg' },
        { name: 'TypeScript', icon: './../../../../assets/img/portfolio/typescript-small.svg' }
      ],
      image: './../../../../assets/img/portfolio/join-dialog.png',
      links: [
        { name: 'GitHub', url: 'https://github.com/Vanski3/join' },
        { name: 'Live Test', url: 'https://vanessa-sachs.com/join' }
      ]
    },
    {
      index: '02',
      name: 'El Pollo Loco',
      description: 'A game developed using HTML, CSS, and JavaScript where you need to navigate and avoid obstacles.',
      technologies: [
        { name: 'HTML', icon: './../../../../assets/img/portfolio/html-small.svg' },
        { name: 'CSS', icon: './../../../../assets/img/portfolio/css-small.svg' },
        { name: 'JavaScript', icon: './../../../../assets/img/portfolio/javascript-small.svg' }
      ],
      image: './../../../../assets/img/portfolio/elp-dialog.png',
      links: [
        { name: 'GitHub', url: 'https://github.com/Vanski3/elp' },
        { name: 'Live Test', url: 'https://vanessa-sachs.com/el-pollo-loco' }
      ]
    },
  ];

  selectedProject = this.projects[0];
  isDialogOpen = false;

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