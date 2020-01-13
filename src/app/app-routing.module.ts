import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [ {
    path: 'login', component: LoginComponent,
  }, {
    path: 'products', component: ProductsComponent,
  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
