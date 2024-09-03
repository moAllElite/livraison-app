import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessViewComponent } from './success-view.component';

describe('SuccessViewComponent', () => {
  let component: SuccessViewComponent;
  let fixture: ComponentFixture<SuccessViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
