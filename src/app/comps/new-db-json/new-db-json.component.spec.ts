import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDbJsonComponent } from './new-db-json.component';

describe('NewDbJsonComponent', () => {
  let component: NewDbJsonComponent;
  let fixture: ComponentFixture<NewDbJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDbJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDbJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
