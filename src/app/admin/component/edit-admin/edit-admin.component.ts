import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../service/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Admin, Branch} from '../../../shared/model/admin.model';

@Component({
  selector: 'ppc-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {
  requestedId!: string;
  email!: string;
  lastName!: string;
  firstName!: string;
  department!: Branch;
  contactNumber!: string;
  constructor(private adminService: AdminService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe(params => {
      this.requestedId = params.id;
    });

    this.adminService.getAdminById(this.requestedId)
      .subscribe({
        next: data => {
           this.firstName = data.firstName;
           this.lastName = data.lastName;
           this.email = data.email;
           this.department = data.branch;
           this.contactNumber = data.contactNumber;
        },
        error: err => {
          console.log('Something went wrong', err);
          alert(err);
        }
      });
  }

  updateAdmin(updateAdminForm: NgForm): void {
    const updatedData = {
      id: this.requestedId,
      firstName: updateAdminForm.value.firstName,
      lastName: updateAdminForm.value.lastName,
      email: updateAdminForm.value.email,
      contactNumber: updateAdminForm.value.contactNumber,
      branch: updateAdminForm.value.department,
    };
    this.adminService.update(updatedData).subscribe();
    this.router.navigate(['/admin/admins']);
  }
}
