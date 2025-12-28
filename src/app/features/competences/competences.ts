import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './competences.html',
  styleUrl: './competences.css',
})
export class Competences {
  basicLanguages = [
    {
      name: 'Python',
      level: 90,
      description: 'Langage de programmation polyvalent, idéal pour le développement web, l\'analyse de données, l\'IA et l\'automatisation.',
      icon: 'basic',
      color: '#3776ab'
    },
    {
      name: 'JavaScript',
      level: 85,
      description: 'Langage de programmation essentiel pour le développement web, permet de créer des pages interactives et dynamiques.',
      icon: 'basic',
      color: '#f7df1e'
    },
    {
      name: 'Java',
      level: 75,
      description: 'Langage de programmation orienté objet, largement utilisé pour les applications d\'entreprise et Android.',
      icon: 'basic',
      color: '#007396'
    },
    {
      name: 'HTML',
      level: 95,
      description: 'Langage de balisage standard pour créer des pages web, structure de base du web.',
      icon: 'basic',
      color: '#e34c26'
    },
    {
      name: 'CSS',
      level: 90,
      description: 'Langage de style pour designer et mettre en page les pages web, essentiel pour l\'apparence.',
      icon: 'basic',
      color: '#1572b6'
    },
    {
      name: 'C',
      level: 70,
      description: 'Langage de programmation système, base de nombreux autres langages et proche du matériel.',
      icon: 'basic',
      color: '#a8b9cc'
    },
    {
      name: 'C++',
      level: 65,
      description: 'Extension de C avec programmation orientée objet, utilisé pour les applications hautes performances.',
      icon: 'basic',
      color: '#00599c'
    }
  ];

  programmingSkills = [
    {
      name: 'NestJS',
      level: 85,
      description: 'Framework Node.js progressif pour construire des applications serveur efficaces et évolutives.',
      icon: 'web',
      color: '#e0234e'
    },
    {
      name: 'Node.js + Express',
      level: 80,
      description: 'Environnement JavaScript côté serveur avec Express pour créer des APIs RESTful robustes.',
      icon: 'web',
      color: '#339933'
    },
    {
      name: 'React.js',
      level: 75,
      description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur interactives et performantes.',
      icon: 'web',
      color: '#61dafb'
    },
    {
      name: 'Angular',
      level: 70,
      description: 'Framework complet pour les applications web monopages avec TypeScript et architecture MVC.',
      icon: 'web',
      color: '#dd0031'
    },
    {
      name: 'Django',
      level: 65,
      description: 'Framework Python haut niveau pour le développement web rapide et sécurisé.',
      icon: 'web',
      color: '#092e20'
    },
    {
      name: 'Flutter',
      level: 60,
      description: 'Framework UI toolkit pour créer des applications mobiles, web et desktop avec un seul codebase et une seule base de code partagée entre toutes les plateformes (Android, iOS, Web, Desktop).',
      icon: 'mobile',
      color: '#02569b'
    }
  ];

  aiSkills = [
    {
      name: 'Machine Learning',
      level: 75,
      description: 'Algorithmes et techniques pour créer des systèmes qui apprennent à partir des données.',
      icon: 'ai',
      color: '#ff6b6b'
    },
    {
      name: 'Deep Learning',
      level: 65,
      description: 'Réseaux de neurones profonds pour l\'apprentissage automatique avancé.',
      icon: 'ai',
      color: '#4ecdc4'
    },
    {
      name: 'NLP',
      level: 85,
      description: 'Traitement du langage naturel pour comprendre et générer le texte humain.',
      icon: 'ai',
      color: '#45b7d1'
    },
    {
      name: 'Vision par Ordinateur',
      level: 75,
      description: 'Analyse et interprétation d\'images et vidéos par l\'intelligence artificielle.',
      icon: 'ai',
      color: '#96ceb4'
    },
    {
      name: 'Déploiement de Modèles',
      level: 90,
      description: 'Mise en production et optimisation des modèles IA pour des applications réelles.',
      icon: 'ai',
      color: '#dda0dd'
    }
  ];
}
