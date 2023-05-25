import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-football-upcoming',
  templateUrl: './football-upcoming.component.html',
  styleUrls: ['./football-upcoming.component.css']
})
export class FootballUpcomingComponent implements OnInit{
  teamsFootball:any;
  isFetching: boolean=false;
  errormessage: any;
  NoUpcoming:boolean=false;
  constructor(private apiservice:ApiserviceService,private route:Router) {}

ngOnInit(){
  this.isFetching=true;
  this.apiservice.getFootballdatas().subscribe((res: any)=>{
    this.teamsFootball=res;
    for(var i=0;i<this.teamsFootball.length;i++)
    {
        if(this.teamsFootball[i].matchStatus1 == 'Upcoming')
        {
          this.NoUpcoming=false;
        }else if(this.teamsFootball[i].matchStatus1 !='Upcoming'){
          console.log(this.teamsFootball[i]);
          
          this.NoUpcoming=true;
        }
    }
    this.isFetching=false;
    setInterval(() => {
      window.location.reload();
    }, 10000);
  },(error:HttpErrorResponse) => {
    this.errormessage=error;
    this.route.navigate(['/error']); 
  })
}

}
