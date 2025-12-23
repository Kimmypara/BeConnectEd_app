import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.page.html',
  styleUrls: ['./teacher-home.page.scss'],
  standalone: false,
})



export class TeacherHomePage {

  greeting = '';
  name = '';
  positiveMessage = '';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const hour = new Date().getHours();
    this.greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

    const messages = [
    "Let’s make today amazing!",
    "Welcome back — let’s get things done!",
    "You’re doing great — keep going!",
    'Keep up the good work!',
    'Every step counts.',
    'Believe in yourself.',
    'Today is full of opportunities.',
    'Small progress is still progress.'
    ];

    this.positiveMessage = messages[Math.floor(Math.random() * messages.length)];

    const user = this.auth.getCurrentUser();
    this.name = user ? `${user.name} ${user.surname}` : '';
  }
}



 






