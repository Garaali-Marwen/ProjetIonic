import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleItemPage } from './single-item.page';

describe('SingleItemPage', () => {
  let component: SingleItemPage;
  let fixture: ComponentFixture<SingleItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
