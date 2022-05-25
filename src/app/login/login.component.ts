import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalserviceService } from '../hospitalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private hospitalservice:HospitalserviceService,private router:Router) { }

  ngOnInit(): void {

  }
  Login(loginform:NgForm){

    console.log("hello"+loginform)
    this.hospitalservice.userLOgin(loginform).subscribe(res=>{
      console.log(res);
      const accessToken=res.accessToken.value;
      const refresh_toke= res.refreshToken.value;
      let Name= res.firstName+res.lastName
       localStorage.setItem("accessToken",accessToken);
       localStorage.setItem("refreshToken",refresh_toke);
       localStorage.setItem('name',Name);
       if(res.type!="2"){
         this.router.navigateByUrl('admin');

       }
       else{
         this.router.navigateByUrl('doctor');
       }
    },err=>{
      alert('error')
    })
  }

}
