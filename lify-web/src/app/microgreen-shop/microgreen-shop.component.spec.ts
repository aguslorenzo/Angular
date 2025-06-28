import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrogreenShopComponent } from './microgreen-shop.component';

describe('MicrogreenShopComponent', () => {
  let component: MicrogreenShopComponent;
  let fixture: ComponentFixture<MicrogreenShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrogreenShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrogreenShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
