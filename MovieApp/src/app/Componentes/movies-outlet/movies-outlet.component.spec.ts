import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesOutletComponent } from './movies-outlet.component';

describe('MoviesOutletComponent', () => {
  let component: MoviesOutletComponent;
  let fixture: ComponentFixture<MoviesOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
