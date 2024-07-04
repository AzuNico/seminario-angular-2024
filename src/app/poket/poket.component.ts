import { Component } from '@angular/core';
import { PoketService } from '../poket.service';
import { Poket } from '../interfaces/Poket';
import { Item } from '../interfaces/Item';

@Component({
  selector: 'poket',
  templateUrl: './poket.component.html',
  styleUrl: './poket.component.scss',
})
export class PoketComponent implements Poket {
  capacity: number = 0;
  itemList: Item[] = [];

  constructor(private _poketService: PoketService) {
    this.capacity = this._poketService.capacity;
    this._poketService.itemList.subscribe((itemList: Item[]) => {
      this.itemList = itemList;
    });
  }
}
