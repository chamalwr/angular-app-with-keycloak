import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Branch, Status} from '../../../shared/model/admin.model';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ppc-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addAnAdmin(addAdminForm: NgForm): void {
    const newAdmin = {
      firstName: addAdminForm.value.firstName,
      lastName: addAdminForm.value.lastName,
      email: addAdminForm.value.email,
      contactNumber: addAdminForm.value.contactNumber,
      branch: addAdminForm.value.department,
    };
    this.adminService.addAdmin(newAdmin)
      .subscribe({
        next: data => {
          console.log('Admin Added');
          this.router.navigate(['/admin/admins']);
        },
        error: err => {
          console.log('Something Went Wrong!', err);
        }
      });
  }
}
