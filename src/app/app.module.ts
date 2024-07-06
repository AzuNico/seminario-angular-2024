import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideHttpClient } from '@angular/common/http';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonPoketComponent } from './components/pokemon-poket/pokemon-poket.component';
import { BagComponent } from './components/bag/bag.component';
import { PoketComponent } from './components/poket/poket.component';
import { PokemonPoketSlotComponent } from './components/pokemon-poket-slot/pokemon-poket-slot.component';
import { PoketSlotComponent } from './components/poket-slot/poket-slot.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonScreenComponent } from './pages/pokemon-screen/pokemon-screen.component';
import { ShopScreenComponent } from './components/shop-screen/shop-screen.component';
import { PokemonStorageScreenComponent } from './pages/pokemon-storage-screen/pokemon-storage-screen.component';
import { FormsModule } from '@angular/forms';

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
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
