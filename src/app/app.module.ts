import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DisplayComponent } from './Components/display/display.component';
import { GetAllComponent } from './Components/get-all/get-all.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';  
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    AddNoteComponent,
    IconsComponent,
    DisplayComponent,
    GetAllComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
