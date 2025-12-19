import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})



export class AppComponent {
p: any;

hideChrome = false;

  constructor(
    private menu: MenuController,
    private router: Router


  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
       
       this.hideChrome = event.urlAfterRedirects.startsWith('/auth');
console.log(event.urlAfterRedirects);
      });
      
  }

  openMenu() {
    this.menu.open();
  }




  
}
