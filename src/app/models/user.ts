import {Role} from './role';

export class User {
  username: string;
  password: string;
  fullName?: string;
  phone?: string;
  status: number;
  role: Role;
}
