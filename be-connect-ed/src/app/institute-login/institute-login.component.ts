import { Component, OnInit } from '@angular/core';
import { IonContent, IonText, IonButton } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { NavController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.scss'],
  standalone: true,
  imports: [IonContent, IonicModule],
})
export class InstituteLoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
