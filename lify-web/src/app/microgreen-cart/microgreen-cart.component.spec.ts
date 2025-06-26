import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrogreenCartComponent } from './microgreen-cart.component';

describe('MicrogreenCartComponent', () => {
  let component: MicrogreenCartComponent;
  let fixture: ComponentFixture<MicrogreenCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrogreenCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrogreenCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
