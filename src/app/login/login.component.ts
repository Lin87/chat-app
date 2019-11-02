import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hasError: boolean;

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {

    this.loginForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmit(value: any): void {

    if (this.loginForm.valid) {

      this.authService.doSignIn(value.email, value.password).then((res)=>{
        this.hasError = false;
        this.router.navigate(['']);
      });
      
    } else {
      this.hasError = true;
    }
    
  }

}
