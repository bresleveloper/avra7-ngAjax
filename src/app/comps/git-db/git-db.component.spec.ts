import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitDbComponent } from './git-db.component';

describe('GitDbComponent', () => {
  let component: GitDbComponent;
  let fixture: ComponentFixture<GitDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
