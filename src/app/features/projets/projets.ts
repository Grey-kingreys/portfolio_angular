import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {
  projects = [
    {
      title: 'prediction etat voiture',
      subtitle: 'Projet Personnel',
      content: 'Portfolio moderne développé avec Angular 17, TypeScript et Bootstrap. Intégration des meilleures pratiques de développement et optimisation des performances.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'RxJS'],
      link: 'https://github.com/Grey-kingreys/portfolio',
      linkText: 'Voir le projet',
      image: 'https://via.placeholder.com/400x200/ffc107/000000?text=Portfolio'
    },
    {
      title: 'Application de gestion',
      subtitle: 'Projet Académique',
      content: 'Application complète de gestion avec authentification, CRUD operations et tableau de bord interactif. Utilisation de REST API et gestion des états.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/Grey-kingreys/gestion-app',
      linkText: 'Voir le projet',
      image: 'https://via.placeholder.com/400x200/0d6efd/ffffff?text=Gestion'
    },
    {
      title: 'E-commerce Platform',
      subtitle: 'Projet Freelance',
      content: 'Plateforme e-commerce avec panier d\'achat, paiement intégré et panel administrateur. Optimisée pour le SEO et les performances.',
      technologies: ['Vue.js', 'Stripe', 'Firebase', 'Tailwind'],
      link: 'https://github.com/Grey-kingreys/ecommerce',
      linkText: 'Voir le projet',
      image: 'https://via.placeholder.com/400x200/198754/ffffff?text=E-commerce'
    },
    {
      title: 'Dashboard Analytics',
      subtitle: 'Projet Entreprise',
      content: 'Dashboard analytique avec visualisation de données en temps réel, graphiques interactifs et export de rapports. Integration d\'API multiples.',
      technologies: ['Angular', 'D3.js', 'Python', 'PostgreSQL'],
      link: 'https://github.com/Grey-kingreys/analytics',
      linkText: 'Voir le projet',
      image: 'https://via.placeholder.com/400x200/6f42c1/ffffff?text=Analytics'
    },
    {
      title: 'Mobile App',
      subtitle: 'Projet Personnel',
      content: 'Application mobile cross-platform pour la gestion de tâches avec synchronisation en temps réel et notifications push.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      link: 'https://github.com/Grey-kingreys/mobile-app',
      linkText: 'Voir le projet',
      image: 'https://via.placeholder.com/400x200/e83e8c/ffffff?text=Mobile'
    },
    {
      title: 'API RESTful',
      subtitle: 'Projet Backend',
      content: 'API RESTful complète avec documentation Swagger, tests unitaires, authentification JWT et déploiement Docker.',
      technologies: ['Node.js', 'Express', 'JWT', 'Docker'],
      link: 'https://github.com/Grey-kingreys/rest-api',
      linkText: 'Voir le projet',
      image: 'https://via.placeholder.com/400x200/20c997/ffffff?text=API'
    }
  ];
}
