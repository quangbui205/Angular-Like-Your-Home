import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signForm: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  signIn() {
    const value = this.signForm.value;
    console.log(value);
    if (this.loginService.findCustomer(value)){
      this.router.navigate(['home']);
    }else{
      this.router.navigate(['login']);
    }
  }
}
