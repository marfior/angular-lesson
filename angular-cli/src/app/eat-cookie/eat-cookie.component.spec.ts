/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EatCookieComponent } from './eat-cookie.component';

describe('EatCookieComponent', () => {
  let component: EatCookieComponent;
  let fixture: ComponentFixture<EatCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
