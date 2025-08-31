import { Component, signal } from '@angular/core';
import { Button } from './components/Button/button/button';
import { Modal } from './components/Modal/modal/modal';
import { Navbar } from './components/Navbar/navbar/navbar';
import { Card } from './components/Card/card/card';
import { Tabs } from './components/Tabs/tabs/tabs';
import { Tab } from './components/Tabs/tabs/tab/tab';
import { Toast } from './components/Toast/toast/toast';

@Component({
  selector: 'app-root',
  imports: [Button, Modal, Navbar, Card, Tabs, Tab, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-ui-pack');
}
