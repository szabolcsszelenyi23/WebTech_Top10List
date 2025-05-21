import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListEditorComponent } from './top-list-editor.component';

describe('TopListEditorComponent', () => {
  let component: TopListEditorComponent;
  let fixture: ComponentFixture<TopListEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopListEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
