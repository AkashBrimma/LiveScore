import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-cricket-recent',
  templateUrl: './cricket-recent.component.html',
  styleUrls: ['./cricket-recent.component.css']
})
export class CricketRecentComponent implements OnInit {
  Cricketteams:any;
  player:any;
  Ended=false;
  isFetching: boolean=false;
  errormessage: any;
  NoRecent:boolean=false;

  constructor(private apiservice:ApiserviceService,private route:Router) {}
  ngOnInit() {
    this.isFetching=true;
    this.apiservice.getCricketdatas().subscribe((res: any)=>{
      this.Cricketteams=res;
      for(var i=0;i<this.Cricketteams.length;i++)
    {
        if(this.Cricketteams[i].match_Status == 'Ended')
        {
          this.NoRecent=false;
          break;
        }else if(this.Cricketteams[i].match_Status !='Ended'){
          this.NoRecent=true;
        }
    }
      this.isFetching=false;
      // setInterval(() => {
      //   window.location.reload();
      // }, 10000);
    },(error:HttpErrorResponse) => {
      this.errormessage=error
      this.route.navigate(['/error']); 
    })
  }
  teamsArray:any =[];
  ShowNextPage(card :any)
  {
        this.route.navigate(['/cricketlive',card]);  
  }
}
