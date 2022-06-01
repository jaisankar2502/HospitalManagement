import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import{  HttpClient,HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientComponent } from './patient/patient.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { CounterhomeComponent } from './counterhome/counterhome.component';
 





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DoctorComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainheaderComponent,
    PatientComponent,
    GalleryComponent,
    DepartmentHomeComponent,
    CounterhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
