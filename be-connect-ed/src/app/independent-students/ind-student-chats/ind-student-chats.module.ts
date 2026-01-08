import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndStudentChatsPageRoutingModule } from './ind-student-chats-routing.module';

import { IndStudentChatsPage } from './ind-student-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndStudentChatsPageRoutingModule
  ],
  declarations: [IndStudentChatsPage]
})
export class IndStudentChatsPageModule {}
