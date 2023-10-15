import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {CategoryService} from "../../Services/category.service";
import {ItemService} from "../../Services/item.service";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {
  @ViewChild(IonModal) modal: any;
  public categories: any[] = [];
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  constructor(private categoryService: CategoryService,
              private itemService: ItemService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe({
      next: response => this.categories = response,
      error: error => console.log(error)
    })
  }

  cancel() {
    this.modal.dismiss();
  }

  onConfirm(form: any) {
    this.itemService.addItem(form).subscribe({
      next: response => {
        this.getAllCategories();
        this.setOpen(true)
      },
      error: error => console.log(error)
    })
    this.modal.dismiss();
  }
}
