import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JournalDialogComponent} from './journal-dialog.component';

describe('JournalDialogComponent', () => {
  let component: JournalDialogComponent;
  let fixture: ComponentFixture<JournalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JournalDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
