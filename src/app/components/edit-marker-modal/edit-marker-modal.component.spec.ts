import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarkerModalComponent } from './edit-marker-modal.component';

describe('EditMarkerModalComponent', () => {
  let component: EditMarkerModalComponent;
  let fixture: ComponentFixture<EditMarkerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMarkerModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMarkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
