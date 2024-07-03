import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Component({
  selector: 'poke-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  pokemonList: Pokemon[] = [
    {
      id: 1,
      height: 10,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      name: 'Bulbasaur',
      type: 'planta',
      weight: 3,
      greeting: '',
    },
  ];

  /* Saludar */
  onGreeting(pokemon: Pokemon): void {
    pokemon.greeting = `${pokemon.name}!!`;
    setTimeout(() => {
      pokemon.greeting = '';
    }, 1500);
  }

  onCatch(pokemon: Pokemon): Pokemon {
    return pokemon;
  }
}
