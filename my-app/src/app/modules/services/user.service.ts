import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly validUsername: string = 'abc';
  private readonly validPassword: string = '1234';

  constructor() {}

  authenticate(username: string, password: string): Observable<boolean> {
    if (username === this.validUsername && password === this.validPassword) {
      // התחברות מוצלחת
      localStorage.setItem('currentUser', JSON.stringify({ username: username }));
      return of(true);
    } else {
      // התחברות נכשלה
      return of(false);
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}