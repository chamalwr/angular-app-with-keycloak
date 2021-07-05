import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from '../../shared/model/owner.model';
import {CreateOwnerDto} from '../../shared/model/create-owner.dto';
import {UpdateOwnerDto} from '../../shared/model/update-owner.dto';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getOwnerById(id: string): Observable<Owner> {
    return this.http.get<Owner>(`${this.BASE_URL}owner/${id}`);
  }

  getAllOwners(): Observable<Owner[]>{
    return this.http.get<Owner[]>(`${this.BASE_URL}owner`);
  }

  addOwner(createOwnerDto: CreateOwnerDto): Observable<any>{
    return this.http.post(`${this.BASE_URL}owner`, createOwnerDto);
  }

  deleteOwner(id: string): Observable<any>{
    return this.http.delete(`${this.BASE_URL}owner/${id}`, {responseType: 'text'});
  }

  updateOwner(updateOwnerDto: UpdateOwnerDto): Observable<any> {
    return this.http.put(`${this.BASE_URL}owner`, updateOwnerDto);
  }
}
