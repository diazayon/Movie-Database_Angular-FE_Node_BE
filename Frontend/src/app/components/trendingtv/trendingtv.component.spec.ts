import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingtvComponent } from './trendingtv.component';

describe('TrendingtvComponent', () => {
  let component: TrendingtvComponent;
  let fixture: ComponentFixture<TrendingtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingtvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
