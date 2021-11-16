import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocelistComponent } from './grocelist.component';

describe('GrocelistComponent', () => {
  let component: GrocelistComponent;
  let fixture: ComponentFixture<GrocelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
