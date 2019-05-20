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
    ///console.log("loginForm", this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginService.isLoggedIn = true;
      this.loginService.user = this.loginForm.value.username;
      console.log("user", this.loginService.user);
      
      if(this.loginService.user === "gate"){
        this.router.navigate(['gate']);
      }else if(this.loginService.user === "wh1"){
        this.router.navigate(['wh1']);
      }else if(this.loginService.user === "wh2"){
        this.router.navigate(['wh2']);
      }else{
        this.router.navigate(['login']);
      }
      
    }
  }

}
