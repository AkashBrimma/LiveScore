import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-cricket-upcoming',
  templateUrl: './cricket-upcoming.component.html',
  styleUrls: ['./cricket-upcoming.component.css']
})
export class CricketUpcomingComponent implements OnInit{
  Cricketteams:any;
  player:any;
  Upcoming=false;
  isFetching: boolean=false;
  NoUpcoming:boolean=false;
  errormessage: any;
  dummy=false;
  constructor(private apiservice:ApiserviceService,private route:Router) {}
  ngOnInit()
   {
    this.isFetching=true;
    this.apiservice.getCricketdatas().subscribe((res: any)=>{
      this.Cricketteams=res;
    for(var i=0;i<this.Cricketteams.length;i++)
    {
        if(this.Cricketteams[i].match_Status == 'Upcoming')
        {
          this.NoUpcoming=false;
        }else if(this.Cricketteams[i].match_Status !='Upcoming'){
          console.log(this.Cricketteams[i]);
          this.NoUpcoming=true;
        }
    }
      this.isFetching=false;
      // setInterval(() => {
      //   window.location.reload();
      // }, 10000);
    },(error:HttpErrorResponse) => {
      this.errormessage=error;
      this.route.navigate(['/error']); 
    }) 
  }
  ShowNextPage(card :any)
  {
        this.route.navigate(['/cricketlive',card]);   
  }
}
