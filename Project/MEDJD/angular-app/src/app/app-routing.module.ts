import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MasterclassComponent } from './masterclass/masterclass.component';
import { ClassComponent } from './masterclass/class/class.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'curriculum', component: CurriculumComponent, canActivate:[AuthGuard]},
  { path: 'masterClass', component: MasterclassComponent, canActivate:[AuthGuard]},
  { path: 'masterClass/:_id', component: ClassComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
