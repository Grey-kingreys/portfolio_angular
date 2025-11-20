import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type ButtonTheme = 'primary' | 'secondary' | 'light';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})
export class Button {
  @Input() href?: string;
  @Input() name?: string;
  @Input() theme: ButtonTheme = 'primary';
  @Input() class: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;

  get buttonClasses(): string {
    const baseClasses = 'btn';
    const themeClass = `btn-${this.theme}`;
    const customClasses = this.class || '';
    const isLink = !!this.href ? 'btn-link' : '';
    
    return [baseClasses, themeClass, customClasses, isLink].filter(Boolean).join(' ');
  }
}
