import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuewatchingComponent } from './continuewatching.component';

describe('ContinuewatchingComponent', () => {
  let component: ContinuewatchingComponent;
  let fixture: ComponentFixture<ContinuewatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuewatchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuewatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
