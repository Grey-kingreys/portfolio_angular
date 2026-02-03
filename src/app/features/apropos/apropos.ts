import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apropos.html',
  styleUrl: './apropos.css',
})
export class Apropos implements OnInit {
  urlImg: string = 'images/Ma photo.jpg';
  altImg: string = 'Ma photo';

  constructor() {}

  ngOnInit(): void {}
}
