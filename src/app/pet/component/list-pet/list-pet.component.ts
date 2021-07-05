import {Component, OnDestroy, OnInit} from '@angular/core';
import {PetService} from '../../service/pet.service';
import {Pet} from '../../../shared/model/pet.model';
import {Observable, Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

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
  constructor(private petService: PetService,
              private router: Router) { }

  ngOnInit(): void {
    this.subscriber = this.getAllPets().subscribe({
      next: data => {
        this.pets = data;
        this.dataSource = new MatTableDataSource(data);
      }
    });
  }

  getAllPets(): Observable<Pet[]> {
    return this.petService.getAllPets();
  }

  deletePet(id: string): void {
    this.petService.deletePet(id)
      .subscribe({
        next: data => {
          console.log('Delete Success');
          window.location.reload();
        },
        error: error => {
          console.error('There was an error!', error);
          alert(error);
        }
      });
  }

  updatePet(id: string): void {
    this.router.navigate(['/pet/editpet'], {queryParams: {id: id.toString() }});
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
