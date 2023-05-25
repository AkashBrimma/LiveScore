import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent {
  ID:any
  Category: string =" ";
  League: any;
  Time:any;
  Date:any;
  ImageA:any;
  ImageB:any;
  MatchNumber:any;
  OverA:any;
  OverB:any;
  ScoreA:any;
  ScoreB:any;
  TeamA:any;
  TeamB:any;
  WicketA:any;
  WicketB:any;
  MatchStatus:any;

  datas :any = [];
  private url="https://localhost:44336/api/Cricket";
  postpageform:FormGroup | any;
  constructor(private apiservice:ApiserviceService ,private http:HttpClient) {}

  onSubmit( ) 
  {
      console.log(this.Category);

    
      
console.log("its working");

 
  const formData : FormData = new FormData();
  
  formData.append('Category', this.Category);
  
    const formData1 = {ID:this.ID, 
      Category: this.Category, 
      League: this.League, 
      Time:this.Time, 
      Date:this.Date, 
      ImageA:this.ImageA, 
      ImageB:this.ImageB, 
      MatchNumber:this.MatchNumber, 
      OverA:this.OverA, 
      OverB:this.OverB, 
      ScoreA:this.ScoreA, 
      ScoreB:this.ScoreB, 
      TeamA:this.TeamA, 
      TeamB:this.TeamB, 
      WicketA:this.WicketA, 
      WicketB:this.WicketB, 
      MatchStatus:this.MatchStatus, };

// this.http.post(`${this.url}`,formData).subscribe((res : any) =>
// {
//     console.log("failed");

//      this.datas =res;
//      console.log(this.datas);
    
     
     
//   })


   this.apiservice.postFormData(formData).subscribe(response => {

     
    
     });
  }

  
}
