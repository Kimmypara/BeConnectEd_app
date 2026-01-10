
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
  courses: IndependentCourse[] = [];
  units: Unit[] = [];

  // used to expand/collapse units per card
  openCourseId: string | null = null;

  constructor(
    private ind: IndependentLearning,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.courses = this.ind.getAvailableCourses(); // independent teacher created courses
    this.units = this.coursesService.unitList;     // unit names from your array
  }

  toggleCourse(id: string) {
    this.openCourseId = (this.openCourseId === id) ? null : id;
  }

  isOpen(id: string) {
    return this.openCourseId === id;
  }

  getUnitName(id: number) {
    const u = this.units.find(x => x.unit_id === Number(id));
    return u ? `${u.unit_code} - ${u.unit_name}` : 'Unknown unit';
  }

  enroll(courseId: string) {
    const res = this.ind.enroll(courseId);
    if (!res.ok) {
      alert(res.message || 'Could not enroll.');
      return;
    }
    alert('Enrolled ✅');
  }
}
