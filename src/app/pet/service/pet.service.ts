import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pet} from '../../shared/model/pet.model';
import {CreatePetDto} from '../../shared/model/create-pet.dto';
import {UpdatePetDto} from '../../shared/model/update-pet.dto';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getPetById(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.BASE_URL}pet/${id}`);
  }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.BASE_URL}pet`);
  }

  deletePet(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}pet/${id}`, {responseType: 'text'});
  }

  addPet(newPet: CreatePetDto): Observable<any>{
    return this.http.post(`${this.BASE_URL}pet`, newPet);
  }

  updatePet(updatePetDto: UpdatePetDto): Observable<any> {
    return this.http.put(`${this.BASE_URL}pet`, updatePetDto);
  }
}
