import { TestBed } from '@angular/core/testing';

import { ItemIngredientService } from './item-ingredient.service';

describe('ItemIngredientService', () => {
  let service: ItemIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
