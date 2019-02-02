import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [LoginComponent, ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
  ]
})
export class ChatModule {
}
