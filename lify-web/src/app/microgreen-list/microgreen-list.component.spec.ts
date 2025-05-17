import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrogreenListComponent } from './microgreen-list.component';

describe('MicrogreenListComponent', () => {
  let component: MicrogreenListComponent;
  let fixture: ComponentFixture<MicrogreenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrogreenListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrogreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
