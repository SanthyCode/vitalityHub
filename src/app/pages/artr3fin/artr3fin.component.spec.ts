import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artr3finComponent } from './artr3fin.component';

describe('Artr3finComponent', () => {
  let component: Artr3finComponent;
  let fixture: ComponentFixture<Artr3finComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Artr3finComponent]
    });
    fixture = TestBed.createComponent(Artr3finComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
