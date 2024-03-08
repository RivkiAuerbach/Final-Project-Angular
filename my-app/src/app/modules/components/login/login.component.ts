// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CourseService } from '../../services/user.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private authService: CourseService, private router: Router) {}

//   login() {
//     this.authService.authenticate(this.username, this.password)
//       .subscribe(
//         (authenticated) => {
//           if (authenticated) {
//             // התחברות מוצלחת - מעבר לדף משתמש
//             this.router.navigate(['/allCourses']);
//           } else {
//             // התחברות נכשלה - הצגת הודעת שגיאה
//             this.errorMessage = 'Invalid username or password. Please try again.';
//           }
//         }
//       );
//   }
// }



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UsersService, private router: Router) {}

  login() {
    if (this.userService.userExists(this.username)) {
      if (this.userService.validatePassword(this.username, this.password)) {
        // Successful login - navigate to AllCoursesComponent
        this.router.navigate(['/allCourses']);
      } else {
        // Password is incorrect
        this.errorMessage = 'Incorrect password. Please try again.';
      }
    } else {
      // User does not exist - navigate to RegisterComponent
      this.router.navigate(['/register'],{ queryParams: { userName: this.username } });
    }
  }
}










































// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { UsersService } from '../../services/user.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private userService: UsersService, private router: Router) {}

//   login() {
//     this.userService.login(this.username, this.password).subscribe(
//       user => {
//         // Successful login - navigate to courses page
//         this.router.navigate(['/allCourses']);
//       },
//       error => {
//         if (error.message === 'User not found') {
//           // User does not exist - navigate to register component
//           this.router.navigate(['/register'], { queryParams: { username: this.username } });
//         } else if (error.message === 'Incorrect password') {
//           // Password is incorrect
//           this.errorMessage = 'Incorrect password. Please try again.';
//         }
//       }
//     );
//   }
// }
