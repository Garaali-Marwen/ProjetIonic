import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ItemService} from "../../Services/item.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @Output() closeEvent = new EventEmitter<any>();
  public items = [];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  close() {
    this.closeEvent.emit("");
  }


  handleInput(event) {
    const query = event.target.value.toLowerCase();

    this.itemService.getItemsByName(query).subscribe({
      next: (response: any[]) => this.items = response,
      error: error => {
        this.items = []
      }
    })
  }
}
