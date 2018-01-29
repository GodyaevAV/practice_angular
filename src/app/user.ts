export class User {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  is_author: boolean;
  about: string;
}
export class EditPassword {
  email: string;
  old_password: string;
  new_password: string;
}
