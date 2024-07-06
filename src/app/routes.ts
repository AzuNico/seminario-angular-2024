import { Routes } from '@angular/router';
import { PokemonScreenComponent } from './pages/pokemon-screen/pokemon-screen.component';
import { ShopScreenComponent } from './components/shop-screen/shop-screen.component';
import { PokemonStorageScreenComponent } from './pages/pokemon-storage-screen/pokemon-storage-screen.component';

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

export default routes;
