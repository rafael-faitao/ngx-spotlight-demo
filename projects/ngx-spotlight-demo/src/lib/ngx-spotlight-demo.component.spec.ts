import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpotlightDemoComponent } from './ngx-spotlight-demo.component';

describe('NgxSpotlightDemoComponent', () => {
  let component: NgxSpotlightDemoComponent;
  let fixture: ComponentFixture<NgxSpotlightDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSpotlightDemoComponent]
    });
    fixture = TestBed.createComponent(NgxSpotlightDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
