import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CricketLiveComponent } from './cricket-live/cricket-live.component';
import { CricketRecentComponent } from './cricket-recent/cricket-recent.component';
import { CricketUpcomingComponent } from './cricket-upcoming/cricket-upcoming.component';
import { CricketComponent } from './cricket/cricket.component';
import { ErrorComponent } from './error/error.component';
import { FootballRecentComponent } from './football-recent/football-recent.component';
import { FootballUpcomingComponent } from './football-upcoming/football-upcoming.component';
import { FootballComponent } from './football/football.component';
import { HomeComponent } from './home/home.component';
import { KabaddiLiveDetailComponent } from './kabaddi-live-detail/kabaddi-live-detail.component';
import { KabaddiLiveComponent } from './kabaddi-live/kabaddi-live.component';
import { KabaddiRecentComponent } from './kabaddi-recent/kabaddi-recent.component';
import { KabaddiUpcomingComponent } from './kabaddi-upcoming/kabaddi-upcoming.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
  {path:'cricket',component:CricketComponent},
  {path:'cricketrecent',component:CricketRecentComponent},
  {path:'cricketupcoming',component:CricketUpcomingComponent},
  {path:'cricketlive',component:CricketLiveComponent},
  {path:'Football',component:FootballComponent},
  {path:'Footballrecent',component:FootballRecentComponent},
  {path:'Footballupcoming',component:FootballUpcomingComponent},
  {path:'Kabaddi',component:KabaddiLiveComponent},
  {path:'Kabaddilive',component:KabaddiLiveDetailComponent},
  {path:'Kabaddirecent',component:KabaddiRecentComponent},
  {path:'Kabaddiupcoming',component:KabaddiUpcomingComponent},
  {path:'login',component:LoginComponent},
  {path:'post',component:PostPageComponent},
  {path:'error',component:ErrorComponent}
]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
