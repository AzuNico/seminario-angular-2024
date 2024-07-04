import { Injectable } from '@angular/core';
import { Pokemon } from './interfaces/Pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonPoketService {
  private _pokemonList: Pokemon[] = [];
  capacity: number = 6;
  pokemonList: BehaviorSubject<Pokemon[]> = new BehaviorSubject(
    this._pokemonList
  );
  

  constructor() {}

  cathPokemon(pokemon: Pokemon) {
    if (this._pokemonList.length >= this.capacity) {
      return;
    }
    this._pokemonList.push({
      ...pokemon,
      id:
        this._pokemonList.length + pokemon.id + Math.floor(Math.random() * 100),
    });
    this.pokemonList.next(this._pokemonList);
  }

  releasePokemon(pokemon: Pokemon) {
    this._pokemonList = this._pokemonList.filter((p) => p.id !== pokemon.id);
    this.pokemonList.next(this._pokemonList);
  }
}
