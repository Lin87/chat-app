import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hasError: boolean;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmit(value: any): void {

    if (this.loginForm.valid) {

      console.log(value);
      this.hasError = false;

    } else {
      this.hasError = true;
    }
    
  }

}
