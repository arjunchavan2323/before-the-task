import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { InactiveuserComponent } from './inactiveuser/inactiveuser.component';


const route:Routes=[
  {
    path:'', component:UsersComponent,
    children:[
      {
        path:'', component:ActiveusersComponent
      },
      {
        path:'active', component:ActiveusersComponent
      },
      {
        path:'inactive', component:InactiveuserComponent
      }
    ]
  }
 
]


@NgModule({
  declarations: [
    UsersComponent,
    ActiveusersComponent,
    InactiveuserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UsersModule { 
  constructor(){
    console.log('users module loaded succsfully')
  }
}
