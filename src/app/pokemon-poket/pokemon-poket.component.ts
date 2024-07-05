import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonPoketService } from '../pokemon-poket.service';

@Component({
  selector: 'pokemon-poket',
  templateUrl: './pokemon-poket.component.html',
  styleUrl: './pokemon-poket.component.scss',
})
export class PokemonPoketComponent {
  pokemonList: Pokemon[] = [];
  capacity: number = 0;
  message: string = '';

  constructor(private _poketService: PokemonPoketService) {
    this.capacity = this._poketService.capacity;
    this._poketService.pokemonList.subscribe((pokemonList) => {
      this.pokemonList = pokemonList;
    });
    this._poketService.message.subscribe((message) => {
      this.message = message;
    });
  }

  cathPokemon(pokemon: Pokemon) {
    this._poketService.cathPokemon(pokemon);
  }

  releasePokemon(pokemon: Pokemon) {
    this._poketService.releasePokemon(pokemon);
  }
}
