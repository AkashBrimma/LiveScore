import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-kabaddi-recent',
  templateUrl: './kabaddi-recent.component.html',
  styleUrls: ['./kabaddi-recent.component.css']
})
export class KabaddiRecentComponent implements OnInit {
  teamsKabadi:any;
  isFetching: boolean=false;
  errormessage: any;
  NoRecent:boolean=false;
  constructor(private apiservice:ApiserviceService,private route:Router) {}

ngOnInit(){
  this.isFetching=true;
  this.apiservice.getKabadidatas().subscribe((res: any)=>{
    this.teamsKabadi=res;
    for(var i=0;i<this.teamsKabadi.length;i++)
    {
        if(this.teamsKabadi[i].matchStatus1 == 'Ended')
        {
          this.NoRecent=false;
          break;
        }else if(this.teamsKabadi[i].matchStatus1 !='Ended'){
          this.NoRecent=true;
        }
    }
    this.isFetching=false;
    setInterval(() => {
      window.location.reload();
    }, 10000);
  }
  ,(error:HttpErrorResponse) => {
    this.errormessage = error;
    this.route.navigate(['/error']); 
  })
}
ShowNextPage(card :any)
  {
        console.log(card);
        this.route.navigate(['/Kabaddilive',card]); 
        
  }

}
