import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ApiserviceService } from './apiservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LiveScore';
  items: MenuItem[] = [];
  constructor(private apiservice:ApiserviceService){}
  ngOnInit(){
    this.items = [
      {
          label:'Cricket',
          icon:'pi pi-fw pi-file',
          
          items:[
              {
                  label:'Live',
                  icon:'pi pi-fw pi-plus',
              },
              {
                  label:'Upcoming',
                  icon:'pi pi-fw pi-trash'
              },
              {
                label:'Previews Match',
                icon:'pi pi-fw pi-trash'
            },
          ]
      },
      {
          label:'FootBall',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Live',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Upcoming',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Preview Match',
                  icon:'pi pi-fw pi-align-center'
              }, 
          ]
      },
      {
          label:'Users',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'Admin Login',
                  icon:'pi pi-fw pi-user',
              }, 
          ]
      },
  ];
  }
}
