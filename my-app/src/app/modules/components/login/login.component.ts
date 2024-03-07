import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: CourseService, private router: Router) {}

  login() {
    this.authService.authenticate(this.username, this.password)
      .subscribe(
        (authenticated) => {
          if (authenticated) {
            // התחברות מוצלחת - מעבר לדף משתמש
            this.router.navigate(['/allCourses']);
          } else {
            // התחברות נכשלה - הצגת הודעת שגיאה
            this.errorMessage = 'Invalid username or password. Please try again.';
          }
        }
      );
  }
}

