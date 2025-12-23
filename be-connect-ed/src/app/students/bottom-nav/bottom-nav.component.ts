import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { IonIcon } from "@ionic/angular/standalone";
import { AppRoutingModule } from "../../app-routing.module";

@Component({
selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  imports: [IonicModule, AppRoutingModule],
  styleUrls: ['./bottom-nav.component.scss']
  
})
export class BottomNavComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}

