import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { PokemonPoketComponent } from './pokemon-poket/pokemon-poket.component';
import { BagComponent } from './bag/bag.component';
import { PoketComponent } from './poket/poket.component';
import { PokemonPoketSlotComponent } from './pokemon-poket-slot/pokemon-poket-slot.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonPoketComponent, BagComponent, PoketComponent, PokemonPoketSlotComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
