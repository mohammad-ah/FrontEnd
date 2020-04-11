import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhealthyComponent } from './unhealthy.component';

describe('UnhealthyComponent', () => {
  let component: UnhealthyComponent;
  let fixture: ComponentFixture<UnhealthyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnhealthyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnhealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
