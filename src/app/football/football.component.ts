import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit{
  teamsFootball:any;
  isFetching: boolean=false;
  errormessage: any;
  NoLive:boolean=false;
  constructor(private apiservice:ApiserviceService,private route:Router) {}
ngOnInit(){
  this.isFetching=true;
  this.apiservice.getFootballdatas().subscribe((res: any)=>{
    this.teamsFootball=res;
    console.log(this.teamsFootball)
    for(var i=0;i<this.teamsFootball.length;i++)
    {
        if(this.teamsFootball[i].matchStatus1 == 'Live')
        {
          this.NoLive=false;
          break;
        }else if(this.teamsFootball[i].matchStatus1 !='Live'){
          this.NoLive=true;
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
