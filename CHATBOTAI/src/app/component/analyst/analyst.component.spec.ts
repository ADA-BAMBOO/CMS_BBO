import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystComponent } from './analyst.component';

describe('AnalystComponent', () => {
  let component: AnalystComponent;
  let fixture: ComponentFixture<AnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalystComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
