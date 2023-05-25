import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabaddiLiveDetailComponent } from './kabaddi-live-detail.component';

describe('KabaddiLiveDetailComponent', () => {
  let component: KabaddiLiveDetailComponent;
  let fixture: ComponentFixture<KabaddiLiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabaddiLiveDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabaddiLiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
