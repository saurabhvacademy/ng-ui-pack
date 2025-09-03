import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
  imports: [NgIf]
})
export class Modal {
  @Input() title: string = 'Modal Title';
  isOpen: boolean = false;

  open() { this.isOpen = true; }
  close() { this.isOpen = false; }
}
