import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {Observable, Subscription} from 'rxjs';
import {Admin} from '../../../shared/model/admin.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'ppc-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit, OnDestroy {
  admins!: Admin[];
  subscriber!: Subscription;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'contactNumber', 'email', 'branch', 'actions'];
  dataSource!: any;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.subscriber = this.getAllAdmins().subscribe({
      next: data => {
        this.dataSource = new MatTableDataSource(data);
        this.admins = data;
      },
      error: err => {
        console.log('Something went Wrong!', err);
        this.admins = [];
        this.dataSource = new MatTableDataSource(this.admins);
      }
    });
  }

  getAllAdmins(): Observable<any> {
    return this.adminService.getAllAdmins();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  deleteAdmin(id: string): Subscription {
      return this.adminService.deleteAdmin(id)
        .subscribe({
          next: data => {
            console.log('Admin Deleted Successfully');
            window.location.reload();
          },
          error: error => {
            console.error('There was an error!', error);
          }
        });
  }
}
