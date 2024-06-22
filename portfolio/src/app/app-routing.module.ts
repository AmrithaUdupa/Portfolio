import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectComponent } from './pages/project/project.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { LayoutComponent } from './sharepage/layout/layout.component';
import { authGuard } from './shared/auth.guard';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path:'',redirectTo:'/login-signup',pathMatch:'full'},
  {path:'login-signup',component:LoginSignupComponent},
  {path:'',component:LayoutComponent,canActivateChild:[authGuard],
    children:[
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'about',
        component:AboutComponent,
      },
      {
        path:'experience',
        component:ExperienceComponent,
      },
      {
        path:'contact',
        component:ContactComponent,
      },
      {
        path:'project',
        component:ProjectComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
