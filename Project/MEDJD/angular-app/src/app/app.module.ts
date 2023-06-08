import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginServiceService } from './auth/login-service.service';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './auth/register/register.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MasterclassComponent } from './masterclass/masterclass.component';
import { ClassComponent } from './masterclass/class/class.component';
import { SearchComponent } from './search/search.component';
import { GameComponent } from './search/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    RegisterComponent,
    CurriculumComponent,
    MasterclassComponent,
    ClassComponent,
    SearchComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
