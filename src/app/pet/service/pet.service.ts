import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Pet} from '../../shared/model/pet.model';
import {catchError} from 'rxjs/operators';
import {CreatePetDto} from '../../shared/model/create-pet.dto';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.BASE_URL}pet`);
  }

  deletePet(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}pet/${id}`, {responseType: 'text'});
  }

  addPet(newPet: CreatePetDto): Observable<any>{
    return this.http.post(`${this.BASE_URL}pet`, newPet);
  }
}
