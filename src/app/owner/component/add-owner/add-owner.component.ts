import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {OwnerService} from '../../service/owner.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ppc-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.scss']
})
export class AddOwnerComponent implements OnInit {

  constructor(private ownerService: OwnerService,
              private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addNewOwner(addOwnerForm: NgForm): void {
    const newOwner = {
      firstName: addOwnerForm.value.firstName,
      lastName: addOwnerForm.value.lastName,
      address: addOwnerForm.value.address,
      zipCode: addOwnerForm.value.zipCode,
      contactNumber: addOwnerForm.value.contactNumber,
      email: addOwnerForm.value.email,
    };
    this.ownerService.addOwner(newOwner)
      .subscribe({
        next: data => {
         console.log('Owner Added');
         console.log(data);
         this.router.navigate(['owner/owners']);
        },
        error: err => {
          console.log('Something went wrong' + err);
        }
      });
  }
}
