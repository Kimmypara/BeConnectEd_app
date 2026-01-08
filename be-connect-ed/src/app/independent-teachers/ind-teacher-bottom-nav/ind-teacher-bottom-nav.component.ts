
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ind-teacher-bottom-nav',
  templateUrl: './ind-teacher-bottom-nav.component.html',
  styleUrls: ['./ind-teacher-bottom-nav.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class IndTeacherBottomNavComponent implements OnInit {
  ngOnInit() {}
}
