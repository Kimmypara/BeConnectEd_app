import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndTeacherChatsPageRoutingModule } from './ind-teacher-chats-routing.module';

import { IndTeacherChatsPage } from './ind-teacher-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndTeacherChatsPageRoutingModule
  ],
  declarations: [IndTeacherChatsPage]
})
export class IndTeacherChatsPageModule {}
