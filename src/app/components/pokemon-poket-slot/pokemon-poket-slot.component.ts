import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';

@Component({
  selector: 'pokemon-poket-slot',
  templateUrl: './pokemon-poket-slot.component.html',
  styleUrl: './pokemon-poket-slot.component.scss',
})
export class PokemonPoketSlotComponent {
  @Input()
  pokemon: Pokemon = {} as Pokemon;

  @Output()
  releasePokemon = new EventEmitter<Pokemon>();

  release(pokemon: Pokemon) {
    this.releasePokemon.emit(pokemon);
  }
}
