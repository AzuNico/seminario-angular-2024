import { Injectable } from '@angular/core';
import { Pokemon } from './interfaces/Pokemon';
import { BehaviorSubject } from 'rxjs';
import { PokemonStorageService } from './pokemon-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonPoketService {
  private _pokemonList: Pokemon[] = [];
  private _message: string = '';
  message: BehaviorSubject<string> = new BehaviorSubject(this._message);
  capacity: number = 6;
  pokemonList: BehaviorSubject<Pokemon[]> = new BehaviorSubject(
    this._pokemonList
  );

  constructor(private _pokemonStorageService: PokemonStorageService) {}

  cathPokemon(pokemon: Pokemon) {
    const uniqueID = new Date().getTime() + pokemon.id;
    const uniquePokemon: Pokemon = { ...pokemon, id: uniqueID };
    if (this._pokemonList.length >= this.capacity) {
      this._pokemonStorageService.storePokemon(uniquePokemon);
      this._message = '  Enviado a guarderia';
      this.message.next(this._message);
      setTimeout(() => {
        this._message = '';
        this.message.next(this._message);
      }, 2000);
      return;
    }
    this._pokemonList.push(uniquePokemon);
    this.pokemonList.next(this._pokemonList);
  }

  releasePokemon(pokemon: Pokemon) {
    this._pokemonList = this._pokemonList.filter((p) => p.id !== pokemon.id);
    this.pokemonList.next(this._pokemonList);
  }
}
