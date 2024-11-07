import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsLocationComponent } from './cats-location.component';

describe('CatsLocationComponent', () => {
  let component: CatsLocationComponent;
  let fixture: ComponentFixture<CatsLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
