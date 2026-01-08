
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
 selector: 'app-ind-teacher-profile',
  templateUrl: './ind-teacher-profile.page.html',
  styleUrls: ['./ind-teacher-profile.page.scss'],
   standalone: false,
})


 export class IndTeacherProfilePage implements OnInit {
name = '';
surname = '';
role='';
 


constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

     const user = this.auth.getCurrentUser();
    this.name = user ? `${user.name}  ${user.surname} `: '';
    this.role = user ? ` ${user.role}`: '';
     // load saved image on page load
    this.profileImage = localStorage.getItem(this.IMAGE_KEY);
  }


  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  profileImage: string | null = null; // dataURL
  private IMAGE_KEY = 'profileImage';

 

  upload() {
    this.fileInput.nativeElement.value = ''; // allow re-upload same file
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    // optional: limit file size (e.g. 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('Image is too large. Please choose an image under 2MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string; // base64 dataURL
      this.profileImage = result;
      localStorage.setItem(this.IMAGE_KEY, result);
    };
    reader.readAsDataURL(file);
  }

  removeImage() {
    this.profileImage = null;
    localStorage.removeItem(this.IMAGE_KEY);
  }

  signOut() {
    this.auth.signOut();
  this.router.navigate(['/auth/login']);
  }
}



