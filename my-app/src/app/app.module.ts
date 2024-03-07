import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './modules/components/login/login.component';
import { AllCoursesComponent } from './modules/components/all-courses/all-courses.component';
import { RegisterComponent } from './modules/components/register/register.component';
import { AddCourseComponent } from './modules/components/add-course/add-course.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllCoursesComponent,
    RegisterComponent,
    AddCourseComponent,
    //RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'allCourses', component: AllCoursesComponent }
      // ניתן להוסיף נתיבים נוספים כרצונך
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }