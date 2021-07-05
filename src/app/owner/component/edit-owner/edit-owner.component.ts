import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../../service/owner.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ppc-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.scss']
})
export class EditOwnerComponent implements OnInit {
  requestedId!: string;
  firstName!: string;
  lastName!: string;
  address!: string;
  zipCode!: string;
  contactNumber!: string;
  email!: string;
  constructor(private ownerService: OwnerService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params => {
      this.requestedId = params.id;
    });

    this.ownerService.getOwnerById(this.requestedId)
      .subscribe({
        next: data => {
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.address = data.address;
          this.zipCode = data.zipCode;
          this.contactNumber = data.contactNumber;
          this.email = data.email;
        },
        error: err => {
          console.log('Something Went Wrong!', err);
          alert(err);
        }
      });
  }

  updateOwner(updateOwnerForm: NgForm): void {
    const updatedOwner = {
      id: this.requestedId,
      firstName: updateOwnerForm.value.firstName,
      lastName: updateOwnerForm.value.lastName,
      address: updateOwnerForm.value.address,
      zipCode: updateOwnerForm.value.zipCode,
      contactNumber: updateOwnerForm.value.contactNumber,
      email: updateOwnerForm.value.email,
    };
    this.ownerService.updateOwner(updatedOwner).subscribe();
    this.router.navigate(['/owner/owners']);
  }
}
