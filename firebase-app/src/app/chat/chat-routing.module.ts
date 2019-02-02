import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat.component';

const chatRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'chat', component: ChatComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChatRoutingModule { }
