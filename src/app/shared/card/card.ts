import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() content: string = '';
  @Input() customClass?: string;
  @Input() showProgressBars: boolean = false;
  @Input() skills?: { name: string; level: number }[];
  @Input() image?: string;
  @Input() imageAlt?: string;
  @Input() date?: string;
  @Input() technologies?: string[];
  @Input() linkProjet?: string;
  @Input() linkCode?: string;
  @Input() linkTextProjet?: string;
  @Input() linkTextCode?: string;
  @Input() icon?: string;
  @Input() color?: string;
}
