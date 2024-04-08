import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleViewComponent } from './article-view.component';

describe('ArticleViewComponent', () => {
  let component: ArticleViewComponent;
  let fixture: ComponentFixture<ArticleViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleViewComponent]
    });
    fixture = TestBed.createComponent(ArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
