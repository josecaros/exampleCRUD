import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCharacterMarvelComponent } from './get-character-marvel.component';

describe('GetCharacterMarvelComponent', () => {
  let component: GetCharacterMarvelComponent;
  let fixture: ComponentFixture<GetCharacterMarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCharacterMarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCharacterMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
