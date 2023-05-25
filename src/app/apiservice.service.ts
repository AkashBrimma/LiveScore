import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  error: any;

  constructor(private http:HttpClient) {}
    getCricketdatas(){
      return this.http.get('https://localhost:44336/api/Cricket');
    }
    getCricketTeamA(){
      return this.http.get('https://localhost:44336/api/PlayerA');
    }
    getCricketTeamB(){
      return this.http.get('https://localhost:44336/api/PlayerB');
    }
    getKabadidatas(){
      return this.http.get('https://localhost:44336/api/Kabaddi');
    }
    getKabaddiTeamA(){
      return this.http.get('https://localhost:44336/api/Kabaddi_PlayerA');
    }
    getKabaddiTeamB(){
      return this.http.get('https://localhost:44336/api/Kabaddi_PlayerB');
    }
    getUserData(name: string,pwd: string){
      return this.http.get('http://localhost:8083/user/'+name+'/'+pwd);
    }
    getFootballdatas(){
      return this.http.get('https://localhost:44336/api/Football');
    }
    postFormData(formData: any) {
      return this.http.post('https://localhost:44336/api/Cricket', formData);
    }
}
