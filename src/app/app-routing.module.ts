import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';

const routes: Routes = [
  {
    path:'', component:DashbordComponent,pathMatch:'full'
  },
  {
    path:'products', loadChildren:()=>import ('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:'users',  loadChildren : () => import ('./users/users.module').then(m=>m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
