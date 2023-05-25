import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabaddiLiveComponent } from './kabaddi-live.component';

describe('KabaddiLiveComponent', () => {
  let component: KabaddiLiveComponent;
  let fixture: ComponentFixture<KabaddiLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabaddiLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabaddiLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
