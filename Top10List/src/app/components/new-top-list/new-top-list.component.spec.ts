import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTopListComponent } from './new-top-list.component';

describe('NewTopListComponent', () => {
  let component: NewTopListComponent;
  let fixture: ComponentFixture<NewTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTopListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
