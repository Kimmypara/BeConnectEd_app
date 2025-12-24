import { Component, OnInit } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers-bottom-nav',
  templateUrl: './teachers-bottom-nav.component.html',
  styleUrls: ['./teachers-bottom-nav.component.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class TeachersBottomNavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
