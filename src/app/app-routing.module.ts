import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"about",component:AboutComponent},

  {path:'dashboard',component:UserdashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
