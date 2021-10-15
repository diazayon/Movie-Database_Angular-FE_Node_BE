import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingmoviesComponent } from './trendingmovies.component';

describe('TrendingmoviesComponent', () => {
  let component: TrendingmoviesComponent;
  let fixture: ComponentFixture<TrendingmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
