import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { ProjectComponent } from './pages/project/project.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { LayoutComponent } from './sharepage/layout/layout.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    HomeComponent,
    LoginSignupComponent,
    ProjectComponent,
    FooterComponent,
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
