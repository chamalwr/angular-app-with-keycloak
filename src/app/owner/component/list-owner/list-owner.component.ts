import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Owner} from '../../../shared/model/owner.model';
import {OwnerService} from '../../service/owner.service';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'ppc-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit, OnDestroy {
  owners!: Owner[];
  subscriber!: Subscription;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'zipCode', 'contactNumber', 'email', 'actions'];
  dataSource!: any;
  constructor(private ownerService: OwnerService,
              private router: Router) { }

  ngOnInit(): void {
    this.subscriber = this.getAllOwners().subscribe({
      next: data => {
        this.owners = data;
        this.dataSource = new MatTableDataSource(data);
      }
    });
  }

  getAllOwners(): Observable<any> {
    return this.ownerService.getAllOwners();
  }

  deleteOwner(id: string): Subscription {
    return this.ownerService.deleteOwner(id)
      .subscribe({
        next: data => {
          console.log('Delete Owner Success');
          window.location.reload();
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

  updateOwner(id: string): void {
    this.router.navigate(['/owner/editOwner'], { queryParams: { id: id.toString() } });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
