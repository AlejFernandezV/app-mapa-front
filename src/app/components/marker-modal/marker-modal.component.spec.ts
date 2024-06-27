import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerModalComponent } from './marker-modal.component';

describe('MarkerModalComponent', () => {
  let component: MarkerModalComponent;
  let fixture: ComponentFixture<MarkerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkerModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
