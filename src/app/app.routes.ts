import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {OrderComponent} from './order/order.component';


export const routes: Routes = [
  {
      path:'', component: HomeComponent
  },

  {
      path:'register',component:RegisterComponent,
  },
  {
    path:'pre-order',component:OrderComponent
  }
];
