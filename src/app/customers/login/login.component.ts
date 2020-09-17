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
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$';

  constructor(private loginService: LoginService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]]
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
  // tslint:disable-next-line:typedef
  get password(){
    return this.signForm.get('password');
  }
  // tslint:disable-next-line:typedef
  get email(){
    return this.signForm.get('email');
  }
}
