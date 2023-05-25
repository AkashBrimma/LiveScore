import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketRecentComponent } from './cricket-recent.component';

describe('CricketRecentComponent', () => {
  let component: CricketRecentComponent;
  let fixture: ComponentFixture<CricketRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
