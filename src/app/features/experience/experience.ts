import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
})
export class Experience implements AfterViewInit {
  experiences = [
    {
      title: 'Développeur Full Stack',
      subtitle: 'Tech Solutions SARL',
      date: '2023 - Présent',
      content: 'Développement d\'applications web modernes avec Angular et Node.js. Gestion de projets complets de la conception à la mise en production.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker'],
      image: 'https://via.placeholder.com/400x200/0d6efd/ffffff?text=Tech+Solutions'
    },
    {
      title: 'Développeur Frontend',
      subtitle: 'Digital Agency',
      date: '2022 - 2023',
      content: 'Création d\'interfaces utilisateur responsives et interactives. Optimisation des performances et amélioration de l\'expérience utilisateur.',
      technologies: ['React', 'TypeScript', 'Sass', 'Bootstrap'],
      image: 'https://via.placeholder.com/400x200/198754/ffffff?text=Digital+Agency'
    },
    {
      title: 'Stagiaire Développeur',
      subtitle: 'StartUp Innovation',
      date: '2021 - 2022',
      content: 'Participation au développement d\'une plateforme SaaS. Apprentissage des bonnes pratiques de développement agile.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Git'],
      image: 'https://via.placeholder.com/400x200/ffc107/000000?text=StartUp'
    }
  ];

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        element.classList.add('visible');
      }
    });
  }
}