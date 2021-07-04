import {Component, OnDestroy, OnInit} from '@angular/core';
import {PetService} from '../../service/pet.service';
import {Pet} from '../../../shared/model/pet.model';
import {Observable, Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {coerceStringArray} from '@angular/cdk/coercion';

@Component({
  selector: 'ppc-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.scss']
})
export class ListPetComponent implements OnInit, OnDestroy {
  pets!: Pet[];
  subscriber!: Subscription;
  displayedColumns: string[] = ['id', 'name', 'age', 'breed', 'type', 'actions'];
  dataSource!: any;
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.subscriber = this.getAllPets().subscribe({
      next: data => {
        this.pets = data;
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
      }
    });
  }

  getAllPets(): Observable<Pet[]> {
    return this.petService.getAllPets();
  }

  deletePet(id: string) {
    this.petService.deletePet(id)
      .subscribe({
        next: data => {
          console.log('Delete Success');
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  viewData(): void {
    console.log(this.pets);
    console.log(this.dataSource);
  }
}
