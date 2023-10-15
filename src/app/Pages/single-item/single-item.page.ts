import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../Services/item.service";

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {

  public item : any;
  constructor(private route: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemService.getItemById(params['id']).subscribe({
        next: response => this.item = response,
        error: error => console.log(error)
      })
    });
  }

}
