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
      subtitle: 'brainSense Technologies',
      date: '2025 - Présent',
      content: 'Développement d\'applications web modernes avec Nestjs et React ainsi que des application mobile avec flutter. Gestion de projets complets de la conception à la mise en production.',
      technologies: ['Nestjs', 'React', 'Flutter', 'Docker'],
      image: 'https://via.placeholder.com/400x200/0d6efd/ffffff?text=Tech+Solutions'
    },
    {
      title: 'Responsable Adjoint de la communication',
      subtitle: 'AfriAi Solutions',
      date: '2022 - 2023',
      content: 'Gestion de la communication interne et externe de l\'entreprise. Coordination des équipes de communication.',
      technologies: ['Communication', 'Coordination', 'Gestion de projet'],
      image: 'https://via.placeholder.com/400x200/198754/ffffff?text=Digital+Agency'
    },
    {
      title: 'Adjoint Responsable technique AI',
      subtitle: 'AfriAi Solutions',
      date: '2021 - 2022',
      content: 'Support technique et développement d\'applications IA. Formation des équipes sur les nouvelles technologies.',
      technologies: ['IA', 'Machine Learning', 'Python', 'Git'],
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