import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentmoviesComponent } from './currentmovies.component';

describe('CurrentmoviesComponent', () => {
  let component: CurrentmoviesComponent;
  let fixture: ComponentFixture<CurrentmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
