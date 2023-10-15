import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent  implements OnInit {
  @Input() ingredient: any;

  constructor() { }

  ngOnInit() {}

}
