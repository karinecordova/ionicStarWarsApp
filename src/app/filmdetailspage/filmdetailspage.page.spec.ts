import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmdetailspagePage } from './filmdetailspage.page';

describe('FilmdetailspagePage', () => {
  let component: FilmdetailspagePage;
  let fixture: ComponentFixture<FilmdetailspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmdetailspagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmdetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
