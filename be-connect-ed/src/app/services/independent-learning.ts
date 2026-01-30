import { Injectable } from '@angular/core';
import { AuthService, AppUser } from './auth';
import { Unit } from './courses'; 

export interface IndependentCourse {
  id: string;                 
  title: string;
  courseCode: string;
  description?: string;
  createdByEmail: string;     
  unitIds: number[];          
  isActive: boolean;
  createdAt: number;
}

export interface IndependentEnrollment {
  id: string;
  studentEmail: string;
  courseId: string;
  enrolledAt: number;
}

@Injectable({ providedIn: 'root' })
export class IndependentLearning {

  private COURSES_KEY = 'independentCourses';
  private ENROLL_KEY = 'independentEnrollments';

  constructor(private auth: AuthService) {}

  private uid(): string {
    return crypto?.randomUUID?.() ?? (Math.random().toString(36).slice(2) + Date.now().toString(36));
  }

  // ---- storage helpers ----
  private getCourses(): IndependentCourse[] {
    const raw = localStorage.getItem(this.COURSES_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private saveCourses(items: IndependentCourse[]) {
    localStorage.setItem(this.COURSES_KEY, JSON.stringify(items));
  }

  private getEnrollments(): IndependentEnrollment[] {
    const raw = localStorage.getItem(this.ENROLL_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private saveEnrollments(items: IndependentEnrollment[]) {
    localStorage.setItem(this.ENROLL_KEY, JSON.stringify(items));
  }

// Get a single course by id 
findCourseById(courseId: string): IndependentCourse | null {
  return this.getCourses().find(c => c.id === courseId) ?? null;
}

// Update a course
updateCourse(courseId: string, patch: Partial<IndependentCourse>) {
  const u = this.auth.getCurrentUser();
  if (!u) return { ok: false, message: 'Not logged in.' };

  const all = this.getCourses();
  const idx = all.findIndex(c => c.id === courseId);
  if (idx < 0) return { ok: false, message: 'Course not found.' };

  const existing = all[idx];
  if (existing.createdByEmail !== u.email) {
    return { ok: false, message: 'Not your course.' };
  }

  const updated: IndependentCourse = {
    ...existing,
    ...patch,
    id: existing.id,
    createdByEmail: existing.createdByEmail,
    createdAt: existing.createdAt,
  };

  all[idx] = updated;
  this.saveCourses(all);
  return { ok: true, course: updated };
}



  
  // ind TEACHER  create course + assign units
  
  createCourse(input: {
    courseCode: any; title: string; description?: string; unitIds: number[] 
}) {
    const u = this.auth.getCurrentUser();
    if (!u || u.accountType !== 'independent' || u.role !== 'teacher') {
      return { ok: false, message: 'Only independent teachers can create courses.' };
    }

    const course: IndependentCourse = {
      id: this.uid(),
      title: input.title.trim(),
      courseCode: input.courseCode.trim(),
      description: input.description?.trim() ?? '',
      createdByEmail: u.email,
      unitIds: input.unitIds ?? [],
      isActive: true,
      createdAt: Date.now(),
    };

    const all = this.getCourses();
    all.push(course);
    this.saveCourses(all);

    return { ok: true, course };
  }

  getMyCourses(): IndependentCourse[] {
    const u = this.auth.getCurrentUser();
    if (!u) return [];
    return this.getCourses().filter(c => c.createdByEmail === u.email);
  }

  updateCourseUnits(courseId: string, unitIds: number[]) {
    const u = this.auth.getCurrentUser();
    const all = this.getCourses();
    const c = all.find(x => x.id === courseId);
    if (!u || !c) return { ok: false, message: 'Course not found.' };
    if (u.email !== c.createdByEmail) return { ok: false, message: 'Not your course.' };

    c.unitIds = unitIds;
    this.saveCourses(all);
    return { ok: true };
  }

  

  
  // STUDENT see courses + enroll
 
  getAvailableCourses(): IndependentCourse[] {
    return this.getCourses().filter(c => c.isActive);
  }

  // Get a single course by id
  getCourseById(courseId: string): IndependentCourse | null {
  return this.getCourses().find(c => c.id === courseId) ?? null;
}

getMyEnrolledCourses(): IndependentCourse[] {
  const u = this.auth.getCurrentUser();

  //  must be logged in as independent student
  if (!u || u.accountType !== 'independent' || u.role !== 'student') return [];

  const enrollments = this.getEnrollments().filter(e => e.studentEmail === u.email);
  const courses = this.getCourses();

  const result: IndependentCourse[] = [];

  for (let i = 0; i < enrollments.length; i++) {
    const courseId = enrollments[i].courseId;
    const course = courses.find(c => c.id === courseId);
    if (course) result.push(course);
  }

  return result;
}



enroll(courseId: string) {
  const u = this.auth.getCurrentUser();

  if (!u || u.accountType !== 'independent' || u.role !== 'student') {
    return { ok: false, message: 'Only independent students can enroll.' };
  }

  const course = this.getCourses().find(c => c.id === courseId && c.isActive);
  if (!course) return { ok: false, message: 'Course not found.' };

  const all = this.getEnrollments();

  // prevent duplicates
  const exists = all.some(e => e.studentEmail === u.email && e.courseId === courseId);
  if (exists) return { ok: false, message: 'Already enrolled.' };

  all.push({
    id: this.uid(),
    studentEmail: u.email,   
    courseId: courseId,      
    enrolledAt: Date.now(),
  });

  this.saveEnrollments(all);
  return { ok: true };
}


  

  getMyEnrollments(): IndependentEnrollment[] {
    const u = this.auth.getCurrentUser();
    if (!u) return [];
    return this.getEnrollments().filter(e => e.studentEmail === u.email);
  }
}

