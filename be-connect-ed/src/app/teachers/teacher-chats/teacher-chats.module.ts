import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherChatsPageRoutingModule } from './teacher-chats-routing.module';

import { TeacherChatsPage } from './teacher-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherChatsPageRoutingModule
  ],
  declarations: [TeacherChatsPage]
})
export class TeacherChatsPageModule {}
