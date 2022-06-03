import { IfStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder, Form} from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HospitalserviceService } from '../hospitalservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  department!: any;
  myform:FormGroup 
  departmentForm:FormGroup
  submitted:boolean=false;
  Doctordetaisl:any;
  Doctorcount:any;
DoctorName:any




  constructor(private modalservice:NgbModal, private hospitalservice:HospitalserviceService,private router :Router) { 
    this.myform= new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      nickName:new FormControl('',[Validators.required]),
      dob:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required,Validators.minLength(20)]),
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      zipcode:new FormControl('',[Validators.required]),
      department:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,]),
      type:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
    this.departmentForm=new FormGroup({
      depName:new FormControl('',[Validators.required]),
      deptype: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.fetchDoctor();
    this.DoctorName= localStorage.getItem('name');
    this.fetchDepartment();
    this. fetchDoctorCount();
    this.getAppointment();
    }
  open(content: any) {
    const modalRef = this.modalservice.open(content,{backdrop : false});
  }



  logOut(){
    this.router.navigateByUrl('login')
    this.router.navigateByUrl('')
    localStorage.clear();
   
    
  }

  // fetch department
  fetchDepartment(){
    this.hospitalservice.fetchDepartment().subscribe(res=>{
      console.log(res);
      this.department= res
      })
  }

  //add user 
  addUser(){
    console.log(this.myform.value);
    this.hospitalservice.addUser(this.myform.value).subscribe(res=>{
      alert("Added successfully");
      this.modalservice.dismissAll();
      this.fetchDepartment();
      this.fetchDoctor();
      this. fetchDoctorCount();
    })
  }
  addDepartment(){
    console.log(this.departmentForm.value);
    this.hospitalservice.addDepartment(this.departmentForm.value).subscribe(res=>{
      alert("added successfully");
      this.modalservice.dismissAll();
    })
    
  }


  fetchDoctor(){
    console.log("hello");
    
    this.hospitalservice.fetchDoctor().subscribe(res=>{
      console.log(res);
     this. Doctordetaisl= res
      
    })
  }
  fetchDoctorCount(){
    this.hospitalservice.fetchCout().subscribe((res:any)=>{
      console.log("count");
      console.log(res)
      this.Doctorcount=res;

    })
  }

search(event:any){
  console.log(event)
  if(event){
    this.Doctordetaisl= this.Doctordetaisl.filter((doc:any)=>{
      const regex = new RegExp(`^${event}`, 'gi');
      return doc['firstName'].match(regex);
  })
  }
 else{
   this.fetchDoctor();
 }
}

getAppointment(){
  this.hospitalservice.appoinmentfetch().subscribe(res=>{
    console.log(res);
  })
}
}
