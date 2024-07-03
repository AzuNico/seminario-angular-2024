import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Component({
  selector: 'user-poket',
  templateUrl: './user-poket.component.html',
  styleUrl: './user-poket.component.scss',
})
export class UserPoketComponent {
  poket: Pokemon[] = [];
}
