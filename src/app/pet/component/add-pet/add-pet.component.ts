import { Component, OnInit } from '@angular/core';
import {PetService} from '../../service/pet.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ppc-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  constructor(private petService: PetService,
              private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addNewPet(addPetForm: NgForm): void{
    const newPet = {
      name: addPetForm.value.name,
      age: addPetForm.value.age,
      breed: addPetForm.value.breed,
      type: addPetForm.value.type
    };
    this.petService.addPet(newPet)
      .subscribe({
        next: data => {
          console.log('Added Pet');
          console.log(data);
          this.router.navigate(['/pet/pets']);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }
}
