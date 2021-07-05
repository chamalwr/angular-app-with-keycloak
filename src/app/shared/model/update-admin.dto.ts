import {Branch} from './admin.model';

export interface UpdateAdminDto{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  branch: Branch;
}
