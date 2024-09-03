import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {OrderComponent} from './order/order.component';
import { SuccessViewComponent } from './success-view/success-view.component';


export const routes: Routes = [
  {
      path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'home', component: HomeComponent
  },
  {
      path:'register',component:RegisterComponent,
  },
  {
    path:'pre-order',component:OrderComponent
  },
  {
    path:'success',component:SuccessViewComponent
  }
];
