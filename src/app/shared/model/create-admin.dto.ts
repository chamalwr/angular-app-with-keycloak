import {Branch} from './admin.model';

export interface CreateAdminDto {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  branch: Branch;
}
