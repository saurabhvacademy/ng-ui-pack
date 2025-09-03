import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  template: '' // no template, it acts as a wrapper
})
export class Tab {
  @Input() label!: string;
  @ContentChild(TemplateRef) content!: TemplateRef<any>;
}
