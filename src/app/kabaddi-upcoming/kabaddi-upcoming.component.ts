import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-kabaddi-upcoming',
  templateUrl: './kabaddi-upcoming.component.html',
  styleUrls: ['./kabaddi-upcoming.component.css']
})
export class KabaddiUpcomingComponent {
  teamsKabadi:any;
  status:boolean=true;
  isFetching: boolean=false;
  errormessage: any;
  NoUpcoming:boolean=false;
  constructor(private apiservice:ApiserviceService,private route:Router) {}

ngOnInit(){
  this.isFetching=true;
  this.apiservice.getKabadidatas().subscribe((res: any)=>{
    this.teamsKabadi=res;
    for(var i=0;i<this.teamsKabadi.length;i++)
    {
        if(this.teamsKabadi[i].matchStatus1 == 'Upcoming')
        {
          this.NoUpcoming=false;
        }else if(this.teamsKabadi[i].matchStatus1 !='Upcoming'){
          this.NoUpcoming=true;
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
