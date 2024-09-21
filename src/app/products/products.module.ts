import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { TvsComponent } from './tvs/tvs.component';
import { TabsComponent } from './tabs/tabs.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { RouterModule, Routes } from '@angular/router';

const route :Routes=[
  {
    path:'', component:ProductsComponent,
    children:[
      {
        path:'', component:TvsComponent
      },
      {
           path:'tvs', component:TvsComponent
      },
      {
        path:'mobiles', component:MobilesComponent
      },
      {
        path:'tabs', component:TabsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductsComponent,
    TvsComponent,
    TabsComponent,
    MobilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('products module loaded succefully')
  }
}
