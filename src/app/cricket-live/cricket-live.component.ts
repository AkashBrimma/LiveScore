import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-cricket-live',
  templateUrl: './cricket-live.component.html',
  styleUrls: ['./cricket-live.component.css']
})
export class CricketLiveComponent implements OnInit{
  teams: any=[];
  player:any=[];
  playerB:any=[];
  showTable1: boolean =true;
  showTable2: boolean=false;
  isFetching: boolean=false;
  params:any;
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
    this.isFetching=true;
    this.route.params.subscribe(params => {
      this.teams.push(params);
      console.log(params);
      this.isFetching=false;
   });
console.log(this.teams,'team')
   this.apiservice.getCricketTeamA().subscribe((res: any)=>{
    res.some((id:any) => {
      if(this.teams[0].id == id.id){
        console.log(id,'id')
        this.player.push(id)
      }else{
        console.log(false)
      }
    })
    // console.log(res,"rse");
    // console.log(this.player);
  })
  this.apiservice.getCricketTeamB().subscribe((res: any)=>{
    res.some((id:any) => {
      if(this.teams[0].id == id.id){
        console.log(id,'id')
        this.playerB.push(id)
      }else{
        console.log(false)
      }
    })
    // console.log(this.playerB,'playerB');
  })
  }
}
