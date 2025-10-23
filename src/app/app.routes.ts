import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {
    path: 'home',
    component: PortfolioComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'item/:id',
    component: ItemComponent,
  },
  {
    path: 'search/:product',
    component: SearchComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
