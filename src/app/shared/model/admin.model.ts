export interface Admin {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  dateOfRegistered: Date;
  branch: Branch;
}

export enum Branch {
  HR = 'HR',
  CUSTOMER_SERVICE = 'CUSTOMER SERVICE',
  DOCTOR = 'DOCTOR',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED'
}
