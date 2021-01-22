import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../service/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    user:User={
        email:'',
        name:'',
        password:'',
        phone:null
    }
    login:boolean = false;
    errormsg:string ='';
  constructor(private register:RegisterService) { }

  ngOnInit() {
  }
  handleLoginALert(){
    this.login=false;
    this.errormsg="";
  }

  saveUser(formData:NgForm){
  
       
      this.register.registers(formData.value).subscribe((res)=>{
          this.login = true;
          // alert(res.message+" "+"please login For continue");
          formData.reset();
        },(err)=>{
          this.login = true;
          this.errormsg="Something went wrong Please contact our team"
        })
       
  }
}
