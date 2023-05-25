import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  model: any = {}
  getData: boolean=false;
  isFetching: boolean=false;
  errormessage: any;
  constructor(private apiservice:ApiserviceService, private router:Router){ }
  ngOnInit() {}

  loginUser(){
    var name = this.model.name;
    var pwd = this.model.pwd;

    this.isFetching=true;
    this.apiservice.getUserData(name,pwd).subscribe((res:any) => {
      console.log(res,"Logged In Success");
      this.getData = res;
      this.isFetching=false;
        if(this.getData == true) {
          this.router.navigate(["/post"]);
      }
    },(error:HttpErrorResponse) => {
      this.errormessage = error;
      this.router.navigate(['/error']); 
    })


    
  }
}
