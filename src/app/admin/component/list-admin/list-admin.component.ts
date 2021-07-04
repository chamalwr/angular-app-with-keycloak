import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'ppc-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllAdmins();
  }

}
