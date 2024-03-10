
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  private users: User[] = [];
  showCourseInput: boolean = false;

  constructor(private _userService: UsersService, private router: Router) {
  
    //server
    _userService.getUserFromServer().subscribe(data => {
      this.users = data;
    })
  }

  login() {
    if (this.userExists(this.username)) {
      if (this.validatePassword(this.username, this.password)) {
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
 
  hasSameUser(user: User): boolean {
    return this.users.some(u => 
      u.name === user.name && 
      u.address === user.address && 
      u.mail === user.mail && 
      u.password === user.password
    );
  }
  // Method to check if a user already exists
  userExists(username: string): boolean {
    return this.users.some(u => u.name === username);
  }

  // Method to check if the password is correct for the user
  validatePassword(username: string, password: string): boolean {
    const user = this.users.find(u => u.name === username);
    return user ? user.password === password : false;
  }

  // Method to add a new user
  addUser(user: User): void {
    this.users.push(user);
    this._userService.postUserToServer(this.users).subscribe(data=>{
      if(data)
      alert("save success")
     });

  }
  toggleCourseInput() {
    this.showCourseInput = !this.showCourseInput;
  }
}










































