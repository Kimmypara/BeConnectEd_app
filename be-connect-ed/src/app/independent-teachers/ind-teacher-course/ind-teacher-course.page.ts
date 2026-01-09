
import { Component, OnInit } from '@angular/core';
import { CoursesService, Unit } from 'src/app/services/courses';
import { IndependentLearning } from 'src/app/services/independent-learning';

@Component({
  selector: 'app-ind-teacher-course',
  templateUrl: './ind-teacher-course.page.html',
  styleUrls: ['./ind-teacher-course.page.scss'],
  standalone: false,
})
export class IndTeacherCoursePage implements OnInit {

  units: Unit[] = [];
  selectedUnitIds: number[] = [];

  title = '';
  description = '';
roleSelectOpts: any;
unitsSelectOpts: any;

  constructor(
    private courses: CoursesService,
    private ind: IndependentLearning
  ) {}

  ngOnInit() {
    this.units = this.courses.unitList; // comes from the service
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



  create() {
    const res = this.ind.createCourse({
      title: this.title,
      description: this.description,
      unitIds: this.selectedUnitIds
    });

    if (!res.ok) {
      alert(res.message);
      return;
    }

    alert('Course created ✅');
    this.title = '';
    this.description = '';
    this.selectedUnitIds = [];
  }
}
