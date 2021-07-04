import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getAllAdmins(){
    const admins = this.http.get(`${this.BASE_URL}admin`).subscribe(admins => {
      console.log(admins);
      return admins;
    });
  }
}
