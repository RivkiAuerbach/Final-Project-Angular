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
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './modules/components/logout/logout.component';
import { CourseDetailsComponent } from './modules/components/course-details/course-details.component';
import { EditCourseComponent } from './modules/components/edit-course/edit-course.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllCoursesComponent,
    RegisterComponent,
    AddCourseComponent,
    LogoutComponent,
    CourseDetailsComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'allCourses', component: AllCoursesComponent },
      { path: 'addCourse', component: AddCourseComponent },
      {path:'register',component:RegisterComponent},
      {path:'logout',component:LogoutComponent}


      // ניתן להוסיף נתיבים נוספים כרצונך
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
