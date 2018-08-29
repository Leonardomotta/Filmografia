import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeviewComponent } from './filmeview.component';

describe('FilmeviewComponent', () => {
  let component: FilmeviewComponent;
  let fixture: ComponentFixture<FilmeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
