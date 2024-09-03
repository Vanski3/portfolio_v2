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
      technologies: ['HTML', 'CSS', 'Firebase', 'JavaScript'],
      image: './../../../../assets/img/portfolio/join-dialog.png', 
    },
    {
      index: '02',
      name: 'El Pollo Loco',
      description: 'A game developed using HTML, CSS, and JavaScript where you need to navigate and avoid obstacles.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: './../../../../assets/img/portfolio/elp-dialog.png',
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
