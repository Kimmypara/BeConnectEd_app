import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule]
  
})
export class LoginPage {

  constructor(private navCtrl: NavController) {}

  goInstituteLogin() {
    this.navCtrl.navigateForward('/auth/institute-login', {
      animated: false
    });
  }
  goIndependentLogin() {
    this.navCtrl.navigateForward('/auth/independent-login', {
      animated: false
    });
  }

}
