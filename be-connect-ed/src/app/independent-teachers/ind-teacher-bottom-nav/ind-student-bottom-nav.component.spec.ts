import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndStudentBottomNavComponent } from './ind-student-bottom-nav.component';

describe('IndStudentBottomNavComponent', () => {
  let component: IndStudentBottomNavComponent;
  let fixture: ComponentFixture<IndStudentBottomNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndStudentBottomNavComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndStudentBottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
