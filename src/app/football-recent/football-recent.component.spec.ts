import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballRecentComponent } from './football-recent.component';

describe('FootballRecentComponent', () => {
  let component: FootballRecentComponent;
  let fixture: ComponentFixture<FootballRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
