import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPagePage } from './selection-page.page';

describe('SelectionPagePage', () => {
  let component: SelectionPagePage;
  let fixture: ComponentFixture<SelectionPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
