import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabaddiRecentComponent } from './kabaddi-recent.component';

describe('KabaddiRecentComponent', () => {
  let component: KabaddiRecentComponent;
  let fixture: ComponentFixture<KabaddiRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabaddiRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabaddiRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
