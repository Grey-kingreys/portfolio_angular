import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactInfo = {
    email: 'soulmamoudou0@gmail.com',
    phone: '+224 624 81 59 98',
    location: 'Conakry, Guinée'
  };

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

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      const formData = this.contactForm.value;

      // Envoi vers Formspree
      this.http.post('https://formspree.io/f/mnndygkk', formData)
        .subscribe({
          next: (response) => {
            this.isSubmitting = false;
            this.submitSuccess = true;
            this.contactForm.reset();
            
            // Masquer le message de succès après 5 secondes
            setTimeout(() => {
              this.submitSuccess = false;
            }, 5000);
          },
          error: (error) => {
            this.isSubmitting = false;
            this.submitError = true;
            
            // Masquer le message d'erreur après 5 secondes
            setTimeout(() => {
              this.submitError = false;
            }, 5000);
          }
        });
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  // Getters pour faciliter l'accès aux contrôles dans le template
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}