import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './competences.html',
  styleUrls: ['./competences.css'],
})
export class Competences implements AfterViewInit {
  basicLanguages = [
    {
      name: 'Python',
      level: 90,
      description: 'Langage de programmation polyvalent, idéal pour le développement web, l\'analyse de données, l\'IA et l\'automatisation.',
      icon: 'fas fa-python',
      color: 'linear-gradient(135deg, #3776ab, #4b8bbe)'
    },
    {
      name: 'JavaScript',
      level: 85,
      description: 'Langage de programmation essentiel pour le développement web, permet de créer des pages interactives et dynamiques.',
      icon: 'fab fa-js',
      color: 'linear-gradient(135deg, #f7df1e, #f5d63d)'
    },
    {
      name: 'Java',
      level: 75,
      description: 'Langage de programmation orienté objet, largement utilisé pour les applications d\'entreprise et Android.',
      icon: 'fab fa-java',
      color: 'linear-gradient(135deg, #007396, #0099cc)'
    },
    {
      name: 'HTML',
      level: 95,
      description: 'Langage de balisage standard pour créer des pages web, structure de base du web.',
      icon: 'fab fa-html5',
      color: 'linear-gradient(135deg, #e34c26, #f06529)'
    },
    {
      name: 'CSS',
      level: 90,
      description: 'Langage de style pour designer et mettre en page les pages web, essentiel pour l\'apparence.',
      icon: 'fab fa-css3-alt',
      color: 'linear-gradient(135deg, #1572b6, #1a87e9)'
    },
    {
      name: 'C',
      level: 70,
      description: 'Langage de programmation système, base de nombreux autres langages et proche du matériel.',
      icon: 'fas fa-c',
      color: 'linear-gradient(135deg, #a8b9cc, #b8c9dc)'
    },
    {
      name: 'C++',
      level: 65,
      description: 'Extension de C avec programmation orientée objet, utilisé pour les applications hautes performances.',
      icon: 'fas fa-cpp',
      color: 'linear-gradient(135deg, #00599c, #0077cc)'
    }
  ];

  programmingSkills = [
    {
      name: 'NestJS',
      level: 85,
      description: 'Framework Node.js progressif pour construire des applications serveur efficaces et évolutives.',
      icon: 'fas fa-server',
      color: 'linear-gradient(135deg, #e0234e, #ff4060)'
    },
    {
      name: 'Node.js + Express',
      level: 80,
      description: 'Environnement JavaScript côté serveur avec Express pour créer des APIs RESTful robustes.',
      icon: 'fab fa-node-js',
      color: 'linear-gradient(135deg, #339933, #44bb44)'
    },
    {
      name: 'React.js',
      level: 75,
      description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur interactives et performantes.',
      icon: 'fab fa-react',
      color: 'linear-gradient(135deg, #61dafb, #80eaff)'
    },
    {
      name: 'Angular',
      level: 70,
      description: 'Framework complet pour les applications web monopages avec TypeScript et architecture MVC.',
      icon: 'fab fa-angular',
      color: 'linear-gradient(135deg, #dd0031, #ff0033)'
    },
    {
      name: 'Django',
      level: 65,
      description: 'Framework Python haut niveau pour le développement web rapide et sécurisé.',
      icon: 'fas fa-database',
      color: 'linear-gradient(135deg, #092e20, #0c4a34)'
    },
    {
      name: 'Flutter',
      level: 60,
      description: 'Framework UI toolkit pour créer des applications mobiles, web et desktop avec un seul codebase.',
      icon: 'fas fa-mobile-alt',
      color: 'linear-gradient(135deg, #02569b, #0378d7)'
    }
  ];

  aiSkills = [
    {
      name: 'Machine Learning',
      level: 75,
      description: 'Algorithmes et techniques pour créer des systèmes qui apprennent à partir des données.',
      icon: 'fas fa-robot',
      color: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)'
    },
    {
      name: 'Deep Learning',
      level: 65,
      description: 'Réseaux de neurones profonds pour l\'apprentissage automatique avancé.',
      icon: 'fas fa-network-wired',
      color: 'linear-gradient(135deg, #4ecdc4, #6ee7e0)'
    },
    {
      name: 'NLP',
      level: 85,
      description: 'Traitement du langage naturel pour comprendre et générer le texte humain.',
      icon: 'fas fa-language',
      color: 'linear-gradient(135deg, #45b7d1, #65d7f1)'
    },
    {
      name: 'Vision par Ordinateur',
      level: 75,
      description: 'Analyse et interprétation d\'images et vidéos par l\'intelligence artificielle.',
      icon: 'fas fa-eye',
      color: 'linear-gradient(135deg, #96ceb4, #b6eec4)'
    },
    {
      name: 'Déploiement de Modèles',
      level: 90,
      description: 'Mise en production et optimisation des modèles IA pour des applications réelles.',
      icon: 'fas fa-rocket',
      color: 'linear-gradient(135deg, #dda0dd, #fdc0fd)'
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