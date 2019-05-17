import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    console.log("isLoggedIn", this.loginService.isLoggedIn);
  }

  onSubmit(){
    console.log("chemicalEntryForm", this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginService.isLoggedIn = true;
      this.router.navigate(['/gate']);
    }
  }

}
