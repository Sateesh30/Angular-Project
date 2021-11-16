import { Injectable } from '@angular/core';

import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  private uitems: Item[] = [
    {
      id: 1,
      itemName: 'Dal',
      Quantity:2,
      price:80
    },
    {
      id: 2,
      itemName: 'Oil',
      Quantity:3,
      price:110
    },
    {
      id: 3,
      itemName: 'Rava',
      Quantity:2,
      price:80
    },
    {
      id: 4,
      itemName: 'Rice',
      Quantity:2,
      price:100
    }
    
  ];

  constructor() { }

  getItemsFromData(): Item[] {
    return this.uitems;
  }

  addItems(item: Item) {
    item.id = this.uitems.length + 1;
    this.uitems.push(item);

  }
  updateItem(item: Item) {
    const index = this.uitems.findIndex(i => item.id === i.id);
    this.uitems[index] = item;
  }
  deleteItem(item: Item) {
    this.uitems.splice(this.uitems.indexOf(item), 1);
  }


}
