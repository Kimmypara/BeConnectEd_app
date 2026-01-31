# BeConnectEd_app
This is an LMS mobile application 

## Tech Stack
* Ionic Framework
* Angular 
* LocalStorage for temporary use (later replaced with MySQL)

## Project Overview
The project is aimed at two account types
* Institute users (registered by admins)
* Independent users (self-registration)

##Two account types
* Institute
* Independent
  
### Multiple user roles 
* Students with an Institute
* Teachers/Lecturers with an Institute
* Parents with an Institute (temporary login in student pages)
* Independent teachers
* Independent students
* Independent parents (temporary login in student pages)

### AuthService (LocalStorage)
* The AuthService handles all authentication logic using local storage.
* It provides basic account creation, login, logout, and role/session handling for both Institute and Independent user types.
  * Users - Stores all registered users (Institute + Independent).
  * CurrentUser - Stores the details of the user who is currently logged in
  * SeededInstituteUsers - Internal flag used to ensure that default Institute accounts are created only once on the         app.

## What has been implemented so far

### Profile
* The profile shows the user's name, surname and role
* Can upload a picture and save (stored locally using LocalStorage) 
* Can remove picture
* Can Sign Out clears the current session and returns to login

### Welcome Banner on the Home page
* The welcome banner has 
    * stating if it is morning, afternoon or evening 
    * user's name and surname
    * positive messages

### Create account and Login
* Register
  * Institute - http://localhost:8100/auth/institute-registration (for developer- temporary)
      * Note: Later, this will be replaced by real admin registration linked to MySQL.
  * Independent - Login page from the Create Independent Account button
 
  * Register new account - Adds a new user to LocalStorage, unless an account with the same email already exists
  * Login - Checks the email and password and sets the currentUser when successful. (If the password or email does not match, a message is shown)
  * Sign-Out - Removes the currentUser entry, meaning logging the user out.
 
  * Note: Password hashing and real authentication will be implemented later on the backend.
 
### Correct login screen
* Each login screen checks the account type:
  * **Institute Login** allows only accountType === 'institute'
  * **Independent Login** allows only accountType === 'independent'
 
  * Note: If the account type does not match the screen, the user is blocked, and a message is shown.

### Redirect after login
After successful login:
* Teacher (institute) → /teacher-home 
* Student (institute) → /student/home 
* Parent (institute) → temporarily redirected to the institute student home until the parent area is added
* Teacher (independent) → /ind-teacher-home 
* Student (independent) → /ind-student/home 
* Parent (independent) → temporarily redirected to the independent student home until the parent area is added

## Routing Structure

### Auth routes
* /auth/login
* /auth/institute-login
* /auth/independent-login
* /auth/independent-registration
* /auth/institute-registration

### Student Area (Institute)
- /student/home
- /student/calendar
- /student/enrolment
- /student/my-units
- /student/notifications
- /student/chats
- /student/profile

### Teacher Area (Institute)
- /teacher-home
- /teacher-calendar
- /teacher-enrolment
- /teaching-units
- /teacher-notifications
- /teacher-chats
- /teacher-profile

### Independent Student Area
- /ind-student-home
- /ind-student-calendar
- /ind-student-enrolment
- /ind-student-course
- /ind-student-myunits
- /ind-student-profile
- /ind-student-chats
- /ind-student-notifications

### Independent Teacher Area
* /ind-teacher-home
* /ind-teacher-calendar
* /ind-teacher-enrolment
* /ind-teacher-course
* /add-new-course
* /ind-teacher-unit
* /ind-teacher-profile
* /ind-teacher-chats
* /ind-teacher-notifications

### Important routing note
The wildcard route must be LAST:
* { path: '**', redirectTo: 'auth/login' }
* This assures that the users are redirected to the login page when loading the app, and invalid/unknown routes redirect to the login page 

### Side Menu (Role-Based)
In app.component.ts, there are the arrays for different role menus:
* Institute student menu
* Institute teacher menu
* Independent student menu
* Independent teacher menu

Menu selection is determined by:
* user.accountType
* user.role

### Bottom navigation
Bottom nav components are displayed depending on role:
* students/bottom-nav
* teachers/teachers-bottom-nav
* independent-teachers/ind-teacher-bottom-nav
* independent-students/ind-student-bottom-nav

### Chrome hiding for auth pages
The app hides menu/header/bottom nav on /auth/... routes using:
* hideChrome = url.startsWith('/auth')
  * Note: the menu icon does not remain hidden when signing out and redirected back to the login page, but if the page is refreshed, the icon is hidden again.
 
### Service for courses
A service was created to store static arrays for:
* course list 
* unit list

  * course list -
    An array of courses was created, including (planned for institute users but still not used yet)
        * course_id: number;
        * course_code: string;
        * course_description: string;
        * course_name: string;
        * course_duration: string;
        * is_active: boolean; 
        * MQF_Level: number;
        * course_credits: number;
  An array of courses was created, including (planned for independent users)
        * mid: number;
        * title: string;
        * description: string;
        * unitIds: number[];
        * createdByEmail: string;
    
   * unit list -
   An array of units created, including (planned for both institute and independent users)
        * unit_id: number;
        * unit_code: string;
        * unit_name: string;
        * unit_description?: string;
        * is_active: boolean;
        * unit_duration: string;
        * ects_credits: number;      
These will later connect to the database through API.

### Course for an Independent Teacher
* Independent teachers can create a new Course
  Each course card shows:
   * Title
   * Description
   * Units included in the course
   * An Edit/View button
* Independent teachers can edit an existing course
* Independent teachers can view all courses that they created 

### Courses for Independent students
* Independent students can see all the available courses created by independent teachers.

### Enrolment for independent students 
* Independent students can enrol in courses created by independent teachers.
* When a student enrols, an enrolment record is saved in LocalStorage.
* The Enrolment page shows only the courses the logged-in student is enrolled in.
