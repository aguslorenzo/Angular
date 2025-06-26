import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrogreenAboutComponent } from './microgreen-about.component';

describe('MicrogreenAboutComponent', () => {
  let component: MicrogreenAboutComponent;
  let fixture: ComponentFixture<MicrogreenAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrogreenAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrogreenAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
