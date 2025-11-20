import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Initialisation si nécessaire
  }
}