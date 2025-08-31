import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class Card {
  @Input() title: string = 'Card Title';
  @Input() description: string = 'Card description goes here.';
  @Input() image?: string;
}
