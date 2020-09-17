import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  findUser(data): boolean {
    for (let user of this.userService.getAll()) {
      if (data.email === user.email && data.password === user.password) {
        localStorage.setItem('userLogin', JSON.stringify(user));
        return true;
      }
    }
    return false;
  }
}
