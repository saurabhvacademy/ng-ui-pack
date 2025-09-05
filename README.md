# ng-ui-pack 🚀

A lightweight Angular 17+ UI component pack with modern design, dark mode-ready SCSS, and zero dependencies.  
Published on npm as **ng-ui-pack-lib** (early release v0.0.1).

---

## ✨ Features
- **Buttons** → Primary, Secondary, Danger, Disabled
- **Modal** → Reusable, Overlay, Custom Content
- **Navbar** → Responsive, Dropdown, Hamburger menu
- **Cards** → Image + Text + Actions
- **Tabs** → Switch content areas
- **Toasts** → Success, Error, Info with auto-dismiss

---

## 📦 Installation
Install via npm:

```bash
npm install ng-ui-pack-lib

```
## 🚀 Usage
### Button
```html
<app-button></app-button>

```
### Modal
```html
<button (click)="modal.open()">Open Modal</button>
<app-modal #modal title="Hello">
  <p>Content goes here</p>
</app-modal>

```
### Toast
```html
<button (click)="toast.show('Success!', 'success')">Show Toast</button>
<app-toast #toast></app-toast>
```

### 🌓 Theming

Easily customize SCSS variables in _variables.scss.

Example:
$primary-color: #4caf50; // change theme to green


### 📖 Demo

Check out the live showcase:
👉 ng-ui-pack Demo
https://saurabhvacademy.github.io/ng-ui-pack

## 📌 Status

Version: 0.0.1 (experimental)

Components may change rapidly

Contributions & feedback are welcome!
 


