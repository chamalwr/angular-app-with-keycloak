import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../../shared/model/admin.model';
import {CreateAdminDto} from '../../shared/model/create-admin.dto';
import {UpdateAdminDto} from '../../shared/model/update-admin.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getAdminById(id: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.BASE_URL}admin/${id}`);
  }

  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.BASE_URL}admin`);
  }

  deleteAdmin(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}admin/${id}`, {responseType: 'text'});
  }

  addAdmin(createAdminDto: CreateAdminDto): Observable<any>{
    return this.http.post(`${this.BASE_URL}admin`, createAdminDto);
  }

  update(updateAdminDto: UpdateAdminDto): Observable<any> {
    return this.http.put(`${this.BASE_URL}admin`, updateAdminDto);
  }
}
