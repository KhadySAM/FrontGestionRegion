import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupaddregionComponent } from './popupaddregion.component';

describe('PopupaddregionComponent', () => {
  let component: PopupaddregionComponent;
  let fixture: ComponentFixture<PopupaddregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupaddregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupaddregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
