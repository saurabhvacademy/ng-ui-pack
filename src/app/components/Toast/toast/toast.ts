import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrls: ['./toast.scss']
})
export class Toast {
  toasts: ToastMessage[] = [];

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const toast: ToastMessage = { message, type };
    this.toasts.push(toast);

    // Auto remove after 3s
    setTimeout(() => this.removeToast(toast), 3000);
  }

  removeToast(toast: ToastMessage) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
