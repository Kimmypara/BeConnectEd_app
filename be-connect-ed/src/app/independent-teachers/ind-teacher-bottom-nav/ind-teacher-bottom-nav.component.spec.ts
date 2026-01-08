import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndTeacherBottomNavComponent  } from './ind-teacher-bottom-nav.component';

describe('IndTeacherBottomNavComponent ', () => {
  let component: IndTeacherBottomNavComponent ;
  let fixture: ComponentFixture<IndTeacherBottomNavComponent >;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndTeacherBottomNavComponent  ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndTeacherBottomNavComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
