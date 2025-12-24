import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
   standalone: false,
})
export class ProfilePage implements OnInit {
name = '';
surname = '';
role='';
 

constructor(private auth: AuthService) { }

  ngOnInit() {

     const user = this.auth.getCurrentUser();
    this.name = user ? `${user.name}  ${user.surname} `: '';
    this.role = user ? ` ${user.role}`: '';

  }

}

