import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'item',
    component: ItemComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
