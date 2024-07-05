import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonScreenComponent } from './pokemon-screen/pokemon-screen.component';
import { ShopScreenComponent } from './shop-screen/shop-screen.component';
import { PokemonStorageScreenComponent } from './pokemon-storage-screen/pokemon-storage-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PokemonScreenComponent,
  },
  { path: 'shop', component: ShopScreenComponent },
  { path: 'pokemon-storage', component: PokemonStorageScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
