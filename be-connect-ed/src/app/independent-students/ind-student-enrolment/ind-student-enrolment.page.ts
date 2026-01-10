import { Component, OnInit } from '@angular/core';
import { CoursesService, Unit } from 'src/app/services/courses';
import { IndependentLearning, IndependentCourse } from 'src/app/services/independent-learning';

@Component({
  selector: 'app-ind-student-enrolment',
  templateUrl: './ind-student-enrolment.page.html',
  styleUrls: ['./ind-student-enrolment.page.scss'],
  standalone: false,
})
export class IndStudentEnrolmentPage implements OnInit {
  units: Unit[] = [];
  enrolledCourses: IndependentCourse[] = [];

  constructor(
    private ind: IndependentLearning,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.units = this.coursesService.unitList;

    // ✅ ONLY enrolled courses
    this.enrolledCourses = this.ind.getMyEnrolledCourses();

    // Debug (keep temporarily)
    console.log('CURRENT USER:', this.ind['auth']?.getCurrentUser());
    console.log('ENROLLED COURSES:', this.enrolledCourses);
  }

  getUnitName(id: number): string {
    const u = this.units.find(x => x.unit_id === id);
    return u ? `${u.unit_code} - ${u.unit_name}` : 'Unknown unit';
  }
}
