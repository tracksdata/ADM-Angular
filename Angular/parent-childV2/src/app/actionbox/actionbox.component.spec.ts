import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionboxComponent } from './actionbox.component';

describe('ActionboxComponent', () => {
  let component: ActionboxComponent;
  let fixture: ComponentFixture<ActionboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
