import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/souleymane-diallo-1b6424229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/Grey-kingreys'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://x.com/Greyykzkingreys?t=L7w-roHOz-c3y_E-8e3RPQ&s=09'
    }
  ];
}