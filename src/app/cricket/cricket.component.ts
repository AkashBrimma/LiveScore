import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit{
  Cricketteams:any;
  player:any;
  Live=false;
  isFetching: boolean=false;
  errormessage: any;
  NoLive:boolean=false;

  constructor(private apiservice:ApiserviceService,private route:Router) {}
  ngOnInit() {
    this.isFetching=true;
    this.apiservice.getCricketdatas().subscribe((res: any)=>{
      this.Cricketteams=res;
      console.log(this.Cricketteams);
      for(var i=0;i<this.Cricketteams.length;i++)
    {
        if(this.Cricketteams[i].match_Status == 'Live')
        {
          this.NoLive=false;
          break;
        }else if(this.Cricketteams[i].match_Status !='Live'){
          this.NoLive=true;
        }
    }
      this.isFetching=false;
      // setInterval(() => {
      //   window.location.reload();
      // }, 10000);
    }
    ,(error:HttpErrorResponse) => {
      this.errormessage=error
      this.route.navigate(['/error']); 
    }) 
  }
  ShowNextPage(card :any)
  {
        this.route.navigate(['/cricketlive',card]);   
  }
}
