import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonStorageService } from '../../services/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-storage-screen',
  templateUrl: './pokemon-storage-screen.component.html',
  styleUrl: './pokemon-storage-screen.component.scss',
})
export class PokemonStorageScreenComponent {
  storedPokemon: Pokemon[] = [];

  constructor(private _pokemonStorageService: PokemonStorageService) {
    this._pokemonStorageService.storagePokemon.subscribe((storedPokemon) => {
      this.storedPokemon = storedPokemon;
    });
  }

  releasePokemon(pokemon: Pokemon) {
    this._pokemonStorageService.releasePokemon(pokemon);
  }
}
