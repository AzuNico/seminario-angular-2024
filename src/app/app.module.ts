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
import { PoketSlotComponent } from './poket-slot/poket-slot.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonScreenComponent } from './pokemon-screen/pokemon-screen.component';
import { ShopScreenComponent } from './shop-screen/shop-screen.component';
import { PokemonStorageScreenComponent } from './pokemon-storage-screen/pokemon-storage-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonPoketComponent,
    BagComponent,
    PoketComponent,
    PokemonPoketSlotComponent,
    PoketSlotComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    PokemonScreenComponent,
    ShopScreenComponent,
    PokemonStorageScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
