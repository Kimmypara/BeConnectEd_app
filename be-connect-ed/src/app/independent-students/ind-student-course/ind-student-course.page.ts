
import { Component, OnInit } from '@angular/core';
import { CoursesService, Unit } from 'src/app/services/courses';
import { IndependentLearning, IndependentCourse } from 'src/app/services/independent-learning';

@Component({
  selector: 'app-ind-student-course',
  templateUrl: './ind-student-course.page.html',
  styleUrls: ['./ind-student-course.page.scss'],
  standalone: false,
})
export class IndStudentCoursePage implements OnInit {
  units: Unit[] = [];
  courses: IndependentCourse[] = [];
  selectedCourse: IndependentCourse | null = null;

  constructor(
    private coursesService: CoursesService,
    private ind: IndependentLearning
  ) {}

  ngOnInit() {
    this.units = this.coursesService.unitList;
    this.courses = this.ind.getAvailableCourses(); // ✅ student uses this
  }

  selectCourse(c: IndependentCourse) {
    this.selectedCourse = c;
  }

  getUnitName(id: number) {
    return this.units.find(u => u.unit_id === id)?.unit_name ?? 'Unknown unit';
  }

  enroll(courseId: string) {
    const res = this.ind.enroll(courseId);
    if (!res.ok) {
      alert(res.message);
      return;
    }
    alert('Enrolled ✅');
  }
}
