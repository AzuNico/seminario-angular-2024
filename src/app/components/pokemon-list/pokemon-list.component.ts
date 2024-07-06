import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';

import { PokemonPoketService } from '../../services/pokemon-poket.service';
import { PokemonDataService } from '../../data/pokemon-data-service.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'], // Corregido a styleUrls y es un array
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = []; // Asegurarse de que pokemonList esté definido

  constructor(
    private _poket: PokemonPoketService,
    private pokemonDataService: PokemonDataService
  ) {}

  ngOnInit() {
    if (this.pokemonList.length > 0) return;
    this.pokemonDataService.fetchAllPokemonDetails().subscribe((data) => {
      this.pokemonList = data; // Asignar los datos recopilados a pokemonList
    });
  }

  onGreeting(pokemon: Pokemon): void {
    pokemon.greeting = `${pokemon.name}!!`;
    setTimeout(() => {
      pokemon.greeting = '';
    }, 1500);
  }

  onCatch(pokemon: Pokemon): void {
    this._poket.cathPokemon(pokemon);
  }
}
