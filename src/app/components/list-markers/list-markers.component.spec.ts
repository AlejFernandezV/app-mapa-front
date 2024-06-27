import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMarkersComponent } from './list-markers.component';

describe('ListMarkersComponent', () => {
  let component: ListMarkersComponent;
  let fixture: ComponentFixture<ListMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMarkersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
