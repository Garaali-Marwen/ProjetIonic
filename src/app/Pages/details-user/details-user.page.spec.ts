import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsUserPage } from './details-user.page';

describe('DetailsUserPage', () => {
  let component: DetailsUserPage;
  let fixture: ComponentFixture<DetailsUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
