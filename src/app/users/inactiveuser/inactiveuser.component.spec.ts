import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveuserComponent } from './inactiveuser.component';

describe('InactiveuserComponent', () => {
  let component: InactiveuserComponent;
  let fixture: ComponentFixture<InactiveuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
