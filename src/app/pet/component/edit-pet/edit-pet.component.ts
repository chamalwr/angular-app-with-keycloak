import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PetService} from '../../service/pet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ppc-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  requestedId!: string;
  name!: string;
  age!: number;
  breed!: string;
  type!: string;
  constructor(private petService: PetService,
              private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params => {
      this.requestedId = params.id;
    });

    this.petService.getPetById(this.requestedId).subscribe({
      next: data => {
        this.name = data.name;
        this.age = data.age;
        this.breed = data.breed;
        this.type = data.type;
      }
    });
  }

  updatePetDetail(updatePetForm: NgForm): void {
    const updatedPet = {
      id: this.requestedId,
      name: updatePetForm.value.name,
      age: updatePetForm.value.age,
      breed: updatePetForm.value.breed,
      type: updatePetForm.value.type,
    };
    this.petService.updatePet(updatedPet).subscribe();
    this.router.navigate(['/pet/pets']);
  }
}
