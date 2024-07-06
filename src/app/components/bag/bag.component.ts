import { Component } from '@angular/core';
import { Poket } from '../../interfaces/Poket';

@Component({
  selector: 'bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.scss',
})
export class BagComponent {
  pokets: Poket[] = [
    // {
    //   id: 1,
    //   capacity: 5,
    //   slotList: [
    //     { id: 1, item: null, limit: 10 },
    //     { id: 2, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //   ],
    // },
    // {
    //   id: 2,
    //   capacity: 5,
    //   slotList: [
    //     { id: 1, item: null, limit: 10 },
    //     { id: 2, item: null, limit: 10 },
    //     { id: 3, item: null, limit: 10 },
    //   ],
    // },
  ];

  constructor() {}
}
