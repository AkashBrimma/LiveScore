import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballUpcomingComponent } from './football-upcoming.component';

describe('FootballUpcomingComponent', () => {
  let component: FootballUpcomingComponent;
  let fixture: ComponentFixture<FootballUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
