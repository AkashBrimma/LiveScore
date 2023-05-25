import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketLiveComponent } from './cricket-live.component';

describe('CricketLiveComponent', () => {
  let component: CricketLiveComponent;
  let fixture: ComponentFixture<CricketLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
