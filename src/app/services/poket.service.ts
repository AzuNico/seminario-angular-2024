import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './interfaces/Item';

@Injectable({
  providedIn: 'root',
})
export class PoketService {
  private _capacity: number = 6;
  private _itemList: Item[] = [];
  capacity: number = this._capacity;
  itemList: BehaviorSubject<Item[]> = new BehaviorSubject(this._itemList);

  constructor() {}

  addItem(newItem: Item) {
    const isFull = this._itemList.length >= this._capacity;

    if (isFull) {
      return;
    }

    const item = this._itemList.find((i) => i.id === newItem.id);

    if (!item) {
      this._itemList.push({
        ...newItem,
      });
    } else {
      item.quantity += newItem.quantity;
    }

    this.itemList.next(this._itemList);
  }

  removeItem(item: Item) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this._itemList = this._itemList.filter((i) => i.id !== item.id);
    }
  }
}
