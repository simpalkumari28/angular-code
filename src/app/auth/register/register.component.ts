import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterPayload } from '../registerpayload';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerPayload = {
      email: '',
      username: '',
      password: ''
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  registerUser() {
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.password = this.registerForm.get('password').value;

    this.authService.register(this.registerPayload).subscribe(data => {
        this.router.navigateByUrl('/login');
    }, error => {

    });
  }
}
