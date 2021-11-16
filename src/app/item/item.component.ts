import { Component, OnInit } from '@angular/core';



import { Item } from '../models/item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {



  items: Item[];
  itemForm: boolean;
  isNewItem: boolean;
  newItem: any = {};
  editItemForm: boolean;
  editedItem: any = {};


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.items = this.getItems();
  }

  getItems(): Item[] {
    return this.itemService.getItemsFromData();
  }

  showEditItemForm(item: Item) {
    if (!item) {
      this.itemForm = false;
      return;
    }
    this.editItemForm = true;
    this.editedItem = item;
  }

  showAddItemForm() {
    // resets form if edited item
    if (this.items.length) {
      this.newItem = {};
    }
    this.itemForm = true;
    this.isNewItem = true;

  }

  saveItem(item: Item) {
    if (this.isNewItem) {
      // add a new user
      this.itemService.addItems(item);
    }
    this.itemForm = false;
  }

  updateItem() {
    this.itemService.updateItem(this.editedItem);
    this.editItemForm = false;
    this.editedItem = {};
  }

  removeItem(item: Item) {
    this.itemService.deleteItem(item);
  }

  cancelEdits() {
    this.editedItem = {};
    this.editItemForm = false;
  }

  cancelNewItem() {
    this.newItem = {};
    this.itemForm = false;
  }


}
