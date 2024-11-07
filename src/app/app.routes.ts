import { Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: CatsComponent,
    title: 'Adopt-a-Cat',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Cat Details',
  },
];
