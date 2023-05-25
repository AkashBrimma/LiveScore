import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabaddiUpcomingComponent } from './kabaddi-upcoming.component';

describe('KabaddiUpcomingComponent', () => {
  let component: KabaddiUpcomingComponent;
  let fixture: ComponentFixture<KabaddiUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabaddiUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabaddiUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
