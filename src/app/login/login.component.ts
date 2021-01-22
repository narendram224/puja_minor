import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    newUser:Login={
      email:'',
      password:''
    }
    login:boolean = false;
    errormsg:string ="";

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  handleLoginALert(){
    this.login=false;
    this.errormsg="";
  }

  loginUser(formData:NgForm){
      console.log(formData.value);
    this.loginService.logins(formData.value).subscribe((res)=>{
      formData.reset();
            this.login= true;
            this.loginService.setToken(res.token);
            this.router.navigate(['dashboard']);
    },(err)=>{
      this.login= true;
      this.errormsg=err.error.message;
        // alert(err.error.message);
    });      
  }
}
