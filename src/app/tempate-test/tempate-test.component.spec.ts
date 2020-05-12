import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateTestComponent } from './tempate-test.component';

describe('TempateTestComponent', () => {
  let component: TempateTestComponent;
  let fixture: ComponentFixture<TempateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
