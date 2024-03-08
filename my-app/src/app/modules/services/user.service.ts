// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CourseService {
//   private readonly validUsername: string = 'abc';
//   private readonly validPassword: string = '1234';

//   constructor() {}

//   authenticate(username: string, password: string): Observable<boolean> {
//     if (username === this.validUsername && password === this.validPassword) {
//       // התחברות מוצלחת
//       localStorage.setItem('currentUser', JSON.stringify({ username: username }));
//       return of(true);
//     } else {
//       // התחברות נכשלה
//       return of(false);
//     }
//   }

//   logout() {
//     localStorage.removeItem('currentUser');
//   }
// }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:7002/api/users'; // Assuming the endpoint to fetch users is '/users'
  private users: User[] = [];

  constructor(private http: HttpClient) { }

  getUsersFromServer(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => {
        this.users = users; // Update the users array with the fetched data
        return users;
      })
    );
  }
  ngOnInit(): void {
    this.getUsersFromServer();
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
    this.http.post<any>(this.apiUrl, this.users);

  }
}
