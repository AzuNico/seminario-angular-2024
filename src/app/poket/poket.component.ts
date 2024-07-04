import { Component, Input } from '@angular/core';
import { Poket } from '../interfaces/Poket';
import { Item } from '../interfaces/Item';

@Component({
  selector: 'poket',
  templateUrl: './poket.component.html',
  styleUrl: './poket.component.scss',
})
export class PoketComponent implements Poket {
  @Input()
  capacity: number = 0;
  @Input()
  itemList: Item[] = [];
  @Input()
  id: number = 0;

  constructor() {}

  addItem(newItem: Item) {
    const isFull = this.itemList.length >= this.capacity;

    if (isFull) {
      return;
    }

    const item = this.itemList.find((i) => i.id === newItem.id);

    if (!item) {
      this.itemList.push({
        ...newItem,
      });
    } else {
      item.quantity += newItem.quantity;
    }
  }

  removeItem(item: Item) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.itemList = this.itemList.filter((i) => i.id !== item.id);
    }
  }
}
