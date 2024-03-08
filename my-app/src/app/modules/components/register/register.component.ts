// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName: string = '';
  newUser: User;
  existingUserMessage: string;
  successMessage: string;

  constructor(private route: ActivatedRoute, private userService: UsersService) {
    this.newUser = new User(0, '', '', '', '');
    this.existingUserMessage = '';
    this.successMessage = '';
  }

  ngOnInit(): void {
    // Subscribe to route parameters
    this.route.queryParams.subscribe(params => {
      this.userName = params['userName'] || '';
      this.newUser.name = this.userName;
    });
  }

  registerUser() {
    // Check if the user already exists based on email
    if (this.userService.hasSameUser(this.newUser)) {
      this.existingUserMessage = 'User already exists.';
    } else {
      // Add the user
      this.userService.addUser(this.newUser);
      this.successMessage = 'Registration successful!';
      // You can also clear the input fields after successful registration
      this.newUser = new User(0, '', '', '', '');
    }
  }
}
