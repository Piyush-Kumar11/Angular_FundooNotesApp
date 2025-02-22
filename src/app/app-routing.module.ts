import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { DisplayComponent } from './Components/display/display.component';
import { GetAllComponent } from './Components/get-all/get-all.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgot",component:ForgotComponent},
  {path:"addNote",component:AddNoteComponent},
  {path:"display",component:DisplayComponent},
  {path:"getAll",component:GetAllComponent},
  {path:"icons",component:IconsComponent},
  {path:"dashboard",component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
