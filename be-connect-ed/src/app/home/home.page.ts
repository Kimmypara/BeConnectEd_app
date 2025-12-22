import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
   standalone: false,
})


export class HomePage {

  greeting = '';
  name = 'Name of Student';
  positiveMessage = '';

  private messages: string[] = [
    'You’re doing great!',
    'Keep up the good work!',
    'Every step counts.',
    'Believe in yourself.',
    'Today is full of opportunities.',
    'Small progress is still progress.'
  ];

  ngOnInit() {
    this.setDailyMessage();
  }

  private setDailyMessage() {
    const today = new Date().toDateString();

    const savedDate = localStorage.getItem('dailyMessageDate');
    const savedMessage = localStorage.getItem('dailyMessage');

    if (savedDate === today && savedMessage) {
      // Use stored message for today
      this.positiveMessage = savedMessage;
    } else {
      // Pick a new message
      const randomIndex = Math.floor(Math.random() * this.messages.length);
      const message = this.messages[randomIndex];

      // Save it
      localStorage.setItem('dailyMessageDate', today);
      localStorage.setItem('dailyMessage', message);

      this.positiveMessage = message;
    }
  }
}


