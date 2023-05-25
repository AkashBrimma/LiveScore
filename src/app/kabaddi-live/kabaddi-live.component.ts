import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-kabaddi-live',
  templateUrl: './kabaddi-live.component.html',
  styleUrls: ['./kabaddi-live.component.css']
})
export class KabaddiLiveComponent implements OnInit {
  teamsKabadi:any;
  isFetching: boolean=false;
  errormessage: any;
  NoLive:boolean=false;
  constructor(private apiservice:ApiserviceService,private route:Router) {}
ngOnInit(){
  this.isFetching=true;
  this.apiservice.getKabadidatas().subscribe((res: any)=>{
    this.teamsKabadi=res;
    console.log(this.teamsKabadi)
    for(var i=0;i<this.teamsKabadi.length;i++)
    {
        if(this.teamsKabadi[i].matchStatus1 == 'Live')
        {
          console.log(this.teamsKabadi[i]);
          this.NoLive=false;
          break;
        }else if(this.teamsKabadi[i].matchStatus1 !='Live'){
          console.log(this.teamsKabadi[i]);
          this.NoLive=true;
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
  ShowNextPage(card :any)
  {
        this.route.navigate(['/Kabaddilive',card]);         
  }

}
