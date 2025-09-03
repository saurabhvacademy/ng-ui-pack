import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUiPackLib } from './ng-ui-pack-lib';

describe('NgUiPackLib', () => {
  let component: NgUiPackLib;
  let fixture: ComponentFixture<NgUiPackLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgUiPackLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgUiPackLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
