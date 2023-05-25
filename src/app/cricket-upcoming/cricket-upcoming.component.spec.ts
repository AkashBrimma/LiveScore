import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketUpcomingComponent } from './cricket-upcoming.component';

describe('CricketUpcomingComponent', () => {
  let component: CricketUpcomingComponent;
  let fixture: ComponentFixture<CricketUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
