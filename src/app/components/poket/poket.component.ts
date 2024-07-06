import { Component, Input } from '@angular/core';
import { Poket } from '../../interfaces/Poket';
import { Slot } from '../../interfaces/Slot';
import { Item } from '../../interfaces/Item';

@Component({
  selector: 'poket',
  templateUrl: './poket.component.html',
  styleUrl: './poket.component.scss',
})
export class PoketComponent implements Poket {
  @Input()
  capacity: number = 0;
  @Input()
  slotList: Slot[] = [];
  @Input()
  id: number = 0;

  constructor() {}

  addItem(newItem: Item) {
    // const isFull = this.slotList.length >= this.capacity;
    // if (isFull) {
    //   return;
    // }
    // const item = this.slotList.find((i) => i.id === newItem.id);
    // if (!item) {
    //   this.slotList.push({
    //     ...newItem,
    //   });
    // } else {
    //   item.quantity += newItem.quantity;
    // }
  }

  removeItem(item: Item) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.slotList = this.slotList.filter((i) => i.id !== item.id);
    }
  }
}
