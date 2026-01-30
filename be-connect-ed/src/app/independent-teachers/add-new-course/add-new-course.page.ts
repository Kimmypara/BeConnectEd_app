import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService, Unit } from 'src/app/services/courses';
import { IndependentLearning } from 'src/app/services/independent-learning';


@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.page.html',
  styleUrls: ['./add-new-course.page.scss'],
  standalone: false,
})
export class AddNewCoursePage implements OnInit {
  units: Unit[] = [];
  selectedUnitIds: number[] = [];

  title = '';
  courseCode = '';
  description = '';

  unitsSelectOpts = { cssClass: 'units-select-alert' };

  editId: string | null = null;
  

  constructor(
    private courses: CoursesService,
    private ind: IndependentLearning,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.units = this.courses.unitList;

    // Edit 
    this.editId = this.route.snapshot.queryParamMap.get('id');

    if (this.editId) {
      const course = this.ind.findCourseById(this.editId);
      if (!course) {
        alert('Course not found.');
        return;
      }

      this.title = course.title;
      this.courseCode = course.courseCode;
      this.description = course.description ?? '';
      this.selectedUnitIds = (course.unitIds ?? []).map(n => Number(n));
    }
  }

  get selectedUnits(): Unit[] {
    const ids: number[] = [];

    if (this.selectedUnitIds != null) {
      for (let i = 0; i < this.selectedUnitIds.length; i++) {
        ids.push(Number(this.selectedUnitIds[i]));
      }
    }

    const selected: Unit[] = [];

    for (let j = 0; j < this.units.length; j++) {
      const unit = this.units[j];
      if (ids.indexOf(unit.unit_id) !== -1) {
        selected.push(unit);
      }
    }

    return selected;
  }

  onUnitsChange(ev: any): void {
    let value: any = null;

    if (ev && ev.detail) {
      value = ev.detail.value;
    }

    const result: number[] = [];

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        result.push(Number(value[i]));
      }
    } else if (value !== null && value !== undefined) {
      result.push(Number(value));
    }

    this.selectedUnitIds = result;
  }

  get unitsSelectedText(): string {
    if (!this.selectedUnitIds || this.selectedUnitIds.length === 0) {
      return '';
    }

    const list: string[] = [];

    for (let i = 0; i < this.selectedUnits.length; i++) {
      list.push(this.selectedUnits[i].unit_code);
    }

    return list.join(', ');
  }

  // Create OR Update
  save() {
    const cleanTitle = (this.title || '').trim();
    const cleanDesc = (this.description || '').trim();
    const hasUnits = this.selectedUnitIds && this.selectedUnitIds.length > 0;

    if (!cleanTitle && !cleanDesc && !hasUnits) {
      alert('Please fill in Title, Description and select at least 1 Unit.');
      return;
    }
    if (!cleanTitle) {
      alert('Please enter a Title.');
      return;
    }
    if (!cleanDesc) {
      alert('Please enter a Description.');
      return;
    }
    if (!hasUnits) {
      alert('Please select at least 1 Unit.');
      return;
    }

    // UPDATE if editId exists
    if (this.editId) {
      const res = this.ind.updateCourse(this.editId, {
        title: cleanTitle,
        courseCode: (this.courseCode || '').trim(),
        description: cleanDesc,
        unitIds: this.selectedUnitIds,
      });

      if (!res.ok) {
        alert(res.message || 'Could not update course.');
        return;
      }

      alert('Course updated ');
      this.router.navigate(['/ind-teacher-course']); 
      return;
    }

    // CREATE
    const res = this.ind.createCourse({
      title: cleanTitle,
      courseCode: this.courseCode,
      description: cleanDesc,
      unitIds: this.selectedUnitIds,
    });

    if (!res.ok) {
      alert(res.message || 'Could not create course.');
      return;
    }

    alert('Course created ');
    this.title = '';
    this.courseCode = '';
    this.description = '';
    this.selectedUnitIds = [];
    this.router.navigate(['/ind-teacher-course']);
  }
}
