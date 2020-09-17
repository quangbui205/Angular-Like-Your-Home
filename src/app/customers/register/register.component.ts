// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$';
  phonePattern = '^((\\0))?[0-9]{9}$';
  passwordPattern = '^[a-z0-9]{10}$';

  constructor(private registerService: CustomerService,
              private reactive: ReactiveFormsModule,
              private router: Router,
              private fb: FormBuilder) {
  }

  // @ts-ignore

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.maxLength(30), Validators.minLength(6), Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern), Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.passwordPattern)]]
    });
  }
  get username(){
    return this.registerForm.get('username');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get phone(){
    return this.registerForm.get('phone');
  }
  get address(){
    return this.registerForm.get('address');
  }
  get password(){
    return this.registerForm.get('password');
  }

  // tslint:disable-next-line:typedef
  register() {
    console.log(this.registerForm);
  }


}
