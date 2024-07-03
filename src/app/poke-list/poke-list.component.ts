import { Component } from '@angular/core';
import { Pokemon } from './Pokemon';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent {
  pokemonList: Pokemon[] = [
    {
      id: 1,
      height: 10,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      name: 'Bulbasaur',
      type: 'planta',
      weight: 3,
    },
  ];
}
