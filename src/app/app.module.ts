import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CricketComponent } from './cricket/cricket.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { HomeComponent } from './home/home.component';
import { CricketLiveComponent } from './cricket-live/cricket-live.component';
import { CardModule } from 'primeng/card';
import { FootballComponent } from './football/football.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KabaddiLiveComponent } from './kabaddi-live/kabaddi-live.component';
import { KabaddiRecentComponent } from './kabaddi-recent/kabaddi-recent.component';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { CricketRecentComponent } from './cricket-recent/cricket-recent.component';
import { CricketUpcomingComponent } from './cricket-upcoming/cricket-upcoming.component';
import { KabaddiUpcomingComponent } from './kabaddi-upcoming/kabaddi-upcoming.component';
import { KabaddiLiveDetailComponent } from './kabaddi-live-detail/kabaddi-live-detail.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { FootballRecentComponent } from './football-recent/football-recent.component';
import { FootballUpcomingComponent } from './football-upcoming/football-upcoming.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PostPageComponent } from './post-page/post-page.component';
import { ErrorComponent } from './error/error.component'; 
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {MatNativeDateModule} from '@angular/material/core';





@NgModule({
  declarations: [
    AppComponent,
    CricketComponent,
    HomeComponent,
    CricketLiveComponent,
    FootballComponent,
    LoginComponent,
    NavbarComponent,
    KabaddiLiveComponent,
    KabaddiRecentComponent,
    CricketRecentComponent,
    CricketUpcomingComponent,
    KabaddiUpcomingComponent,
    KabaddiLiveDetailComponent,
    FootballRecentComponent,
    FootballUpcomingComponent,
    PostPageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    NgxNavbarModule,
    CollapseModule,
    CardModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    MdbCarouselModule,
    NgIf,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    ProgressSpinnerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    
  ],
  providers: [BsDatepickerConfig, BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
