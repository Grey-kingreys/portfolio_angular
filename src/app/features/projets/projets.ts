import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../shared/card/card';
import { title } from 'node:process';

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
      subtitle: 'Projet Académique',
      content: "Une intelligence artificiel qui a partir des informations d'une voiture (marque, annee, transmission ou boite de vitesse, prix et quartier), il predit si la voiture est occassion ou venante",
      technologies: ['Machine learning'],
      linkProjet: 'https://huggingface.co/spaces/greykingreys/etat_prediction_voiture',
      linKCode: 'https://github.com/Grey-kingreys/prediction_voiture',
      linkTextProjet: 'Voir le projet',
      linkTextCodes: 'Voir le code',
      image: 'images/etat_pred_voiture.png'
    },
    {
      title: 'Traduction',
      subtitle: 'Projet Personnel',
      content: " Une application faite avec python qui permet de traduit 5 langue(anglais, arabe, japonais, allemand, espagnol) en français. Note: c'est pas un modele d'IA juste un code avec avec deep-translator et une interface avec gradio",
      technologies: ['python', 'GoogleTraduct'],
      linkProjet: 'https://huggingface.co/spaces/greykingreys/Traduction',
      linKCode: 'https://github.com/Grey-kingreys/Traductions',
      linkTextProjet: 'Voir le projet',
      linkTextCodes: 'Voir le code',
      image: 'images/traduction.png'
    },
    {
      title: 'Performance etudiant',
      subtitle: 'Projet Académique',
      content: "Une IA faite avec python qui permet de predire les Performances d'un etudiant a partir de quelquel un de ses informations comme: heures de cours, heures de repos, est_ce qu'il revise a la maison",
      technologies: ['Machine learning'],
      linkProjet: 'https://huggingface.co/spaces/greykingreys/Pred_student_performence',
      linKCode: 'https://github.com/Grey-kingreys/student_performance',
      linkTextProjet: 'Voir le projet',
      linkTextCodes: 'Voir le code',
      image: 'images/student_pred.png'
    },
    {
      title: 'Diagnostic maladie',
      subtitle: 'Projet Personnel',
      content: "C'est un model assez interressant. Si vous avez des symptomes, quelquel choix leurs nombres avec ce model vous avez seulement a saisir les symptomes alors le  model predit votre maladie, la descriptions, le niveau des gravité et les precautions a prendre.",
      technologies: ['Machine learning'],
      linkProjet: 'https://github.com/Grey-kingreys/analytics',
      linKCode: 'https://github.com/Grey-kingreys/prediction_voiture',
      linkTextProjet: 'Voir le projet',
      linkTextCodes: 'Voir le code',
      image: 'images/diagnomaladie.png'
    },
    {
      title: 'Detection Object',
      subtitle: 'Projet Académique',
      content: "Un model super interressant. Vous lui donner une image ou une video, il vous detecte tout les objects en les mentant dans un cadre en rectangles ",
      technologies: ['Computer Vision'],
      linkProjet: 'https://github.com/Grey-kingreys/mobile-app',
      linKCode: 'https://github.com/Grey-kingreys/prediction_voiture',
      linkTextProjet: 'Voir le projet',
      linkTextCodes: 'Voir le code',
      image: 'images/Image_Detections.png'
    },
    {
      title: 'API RESTful',
      subtitle: 'Projet Backend',
      content: 'API RESTful complète avec documentation Swagger, tests unitaires, authentification JWT et déploiement sur Render.',
      technologies: ['Node.js', 'Nestjs', 'JWT', 'swagger'],
      linKCode: 'https://github.com/Grey-kingreys/prediction_voiture',
      linkProjet: 'https://github.com/Grey-kingreys/rest-api',
      linkTextProjet: 'Voir le projet',
      linkTextCodes: 'Voir le code',
      image: 'https://via.placeholder.com/400x200/20c997/ffffff?text=API'
    },
    {
      title: 'SPAM detection',
      subtitle: "Projet Academique",
      content: "C'est un model qui reçois un message puis verifie si le message est un SPAM ou pas. Elle serait utile et assez fort pour detecter les spam dans un systeme de messagerie.",
      technologies: ['Machine learning'],
      linKCode: 'https://huggingface.co/spaces/greykingreys/SPAM_HAM_MESSAGE/tree/main',
      linkProjet: 'https://huggingface.co/spaces/greykingreys/SPAM_HAM_MESSAGE',
      linkTextProjet: 'voir le projet',
      linkTextCodes: 'voir le code',
      image: 'images/SPAM.png'
    },
    {
      title: 'Transformer un audio en texte',
      subtitle: "Projet Academique",
      content: "Un model IA qui reçois un audio et le transforme en texte. vous avez un rapport a faire, vous n'avez pas beaucoup de temps c'est le model parfait pour vous. il peut aussi jouer le role de traducteur, la possibilité de donner un audio en anglais ou en français et recevoir un texte en anglais ou en français sur le 3eme et 4eme interface",
      technologies: ['NLP', 'Transformers'],
      linKCode: 'https://huggingface.co/spaces/greykingreys/transcribe_audio_to_text/tree/main',
      linkProjet: 'https://huggingface.co/spaces/greykingreys/transcribe_audio_to_text',
      linkTextProjet: 'voir le projet',
      linkTextCodes: 'voir le code',
      image: 'images/audio to texte.png'
    }
  ];
}
