import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientsListPage } from './ingredients-list.page';

describe('IngredientsListPage', () => {
  let component: IngredientsListPage;
  let fixture: ComponentFixture<IngredientsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngredientsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
