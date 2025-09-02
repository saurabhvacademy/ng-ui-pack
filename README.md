# ng-ui-pack 🚀

A lightweight Angular 17+ UI component pack with modern design, dark mode-ready SCSS, and zero dependencies.

## ✨ Features
- Buttons (Primary, Secondary, Danger, Disabled)
- Modal (Reusable, Overlay, Custom Content)
- Navbar (Responsive, Dropdown, Hamburger menu)
- Cards (Image + Text + Actions)
- Tabs (Switch content areas)
- Toasts (Success, Error, Info with auto-dismiss)

## 📦 Installation
```bash
npm install ng-ui-pack

(For now, clone and use locally until published on npm)

🚀 Usage
Button
<app-button></app-button>

Modal
<button (click)="modal.open()">Open Modal</button>
<app-modal #modal title="Hello">
  <p>Content goes here</p>
</app-modal>

Toast
<button (click)="toast.show('Success!', 'success')">Show Toast</button>
<app-toast #toast></app-toast>

🌓 Theming

Easily customize SCSS variables in src/_variables.scss.

Example:

$primary-color: #4caf50; // change theme to green