import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 customerLogin;
  constructor(private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.customerLogin = this.loginService.getCustomer();
    console.log(this.customerLogin);
  }

  logout(): any {
    localStorage.removeItem('customerLogin');
    this.router.navigate(['login']);
  }

}
