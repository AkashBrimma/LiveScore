import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-football-recent',
  templateUrl: './football-recent.component.html',
  styleUrls: ['./football-recent.component.css']
})
export class FootballRecentComponent implements OnInit {
  teamsFootball:any;
  isFetching: boolean=false;
  errormessage: any;
  NoRecent:boolean=false;
  constructor(private apiservice:ApiserviceService,private route:Router) {}

ngOnInit(){
  this.isFetching=true;
  this.apiservice.getFootballdatas().subscribe((res: any)=>{
    this.teamsFootball=res;
    for(var i=0;i<this.teamsFootball.length;i++)
    {
        if(this.teamsFootball[i].matchStatus1 == 'Ended')
        {
          this.NoRecent=false;
          break;
        }else if(this.teamsFootball[i].matchStatus1 !='Ended'){
          this.NoRecent=true;
        }
    }
    this.isFetching=false;
    setInterval(() => {
      window.location.reload();
    }, 10000);
  },(error:HttpErrorResponse) => {
    this.errormessage = error;
    this.route.navigate(['/error']); 
  })
}
}
