import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPayload } from '../loginpayload';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  loginForm: FormGroup;
  loginPayload: LoginPayload;
  isError: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    
    this.authService.login(this.loginPayload).subscribe((result) => {
      if (result) {
        this.isError = false;
        this.router.navigateByUrl('/');
      } else {
        this.isError = true;
      }
    },()=>{
      this.isError = true;
    })
  }
}
