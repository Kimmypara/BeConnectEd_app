import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton, IonFab, IonIcon, IonFabButton, IonContent } from '@ionic/angular/standalone';

import { CoursesService, IndependentCourse } from 'src/app/services/courses';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-ind-courses',
  templateUrl: './ind-teacher-course.page.html',
  styleUrls: ['./ind-teacher-course.page.scss'],
  standalone: true,
  imports: [IonContent, IonFabButton, IonIcon, IonFab, 
    CommonModule,   
    RouterModule,   
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
  ],
})
export class IndTeacherCoursePage {
  courses: IndependentCourse[] = [];

  constructor(
    private coursesSvc: CoursesService,
    private auth: AuthService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    const me = this.auth.getCurrentUser();
    const email = me?.email ?? '';
    this.courses = this.coursesSvc.getIndependentCoursesByTeacher(email);
  }

 edit(c: IndependentCourse) {
  this.router.navigate(['/add-new-course'], { queryParams: { id: c.id } });
}


  getUnitName(id: number) {
    return (
      this.coursesSvc.unitList.find(u => u.unit_id === id)?.unit_name ?? `Unit ${id}`
    );
  }
}
