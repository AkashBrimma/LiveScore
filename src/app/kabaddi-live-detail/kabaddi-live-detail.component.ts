import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-kabaddi-live-detail',
  templateUrl: './kabaddi-live-detail.component.html',
  styleUrls: ['./kabaddi-live-detail.component.css']
})
export class KabaddiLiveDetailComponent {
  isShowDivIf = false;  
  teams: any=[];
  playerA:any=[];
  playerB:any=[];
  showTable1: boolean =true;
  showTable2: boolean=false;
  showFirstTable() {
    this.showTable1 = true;
    this.showTable2 = false;
  }
  
  showSecondTable() {
    this.showTable1 = false;
    this.showTable2 = true;
  }
  constructor(private apiservice:ApiserviceService,private route: ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe(params => {
      console.log(params);
      this.teams.push(params);
   });
   this.apiservice.getKabaddiTeamA().subscribe((res: any)=>{
    res.some((id:any) => {
      if(this.teams[0].id == id.id){
        console.log(id,'id')
        this.playerA.push(id)
      }else{
        console.log(false)
      }
    })
  })
  this.apiservice.getKabaddiTeamB().subscribe((res: any)=>{
    res.some((id:any) => {
      if(this.teams[0].id == id.id){
        console.log(id,'id')
        this.playerB.push(id)
      }else{
        console.log(false)
      }
    })
  }
  )
  }
}
