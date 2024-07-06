import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonStorageService {
  private _storagePokemon: Pokemon[] = [];
  storagePokemon: BehaviorSubject<Pokemon[]> = new BehaviorSubject(
    this._storagePokemon
  );

  constructor() {}

  storePokemon(pokemon: Pokemon) {
    this._storagePokemon.push({
      ...pokemon,
    });
    this.storagePokemon.next(this._storagePokemon);
  }

  releasePokemon(pokemon: Pokemon) {
    this._storagePokemon = this._storagePokemon.filter((p) => p.id !== pokemon.id);
    this.storagePokemon.next(this._storagePokemon);
  }
}
