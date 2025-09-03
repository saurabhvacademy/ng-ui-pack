import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from './tab/tab';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss']
})
export class Tabs implements AfterContentInit {
  @ContentChildren(Tab) tabQueryList!: QueryList<Tab>;
  tabs: Tab[] = [];
  activeIndex = 0;

  ngAfterContentInit() {
    this.tabs = this.tabQueryList.toArray();
  }

  selectTab(index: number) {
    this.activeIndex = index;
  }
}
