import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { HospitalserviceService } from '../hospitalservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  name:any
  patientcount!:number;
  docid:any;
  patientDetails:any;
  pipe= new DatePipe('en-Us');
  constructor(private hospital_service:HospitalserviceService) { }

  ngOnInit(): void {
    this.name= localStorage.getItem('name');
    this.docid= localStorage.getItem('userid');
    this.fetchPatient();
    console.log("oninit"+this.docid)
    this. totalBooking(this.docid)
    
   }
  logOut(){
    localStorage.clear();
  }
 
  totalBooking(id:any){
  console.log("booking"+id)
    this.hospital_service.fetchPatientcountForDoctor(id).subscribe(res=>{
      this.patientcount= res
      console.log( "result"+this.patientcount);
    })

  }

  fetchPatient(data?:any){
    let today= data? data: new Date();
    let date = this.pipe.transform(today,'YYYY-MM-dd');
    console.log(date);
    console.log(this.docid);
    this.hospital_service.fetchCurrentPatient(this.docid,date).subscribe(res=>{
      console.log(res);
      this.patientDetails= res;

    })
  }






  //<---------search-------->
  searchPatient(query:any){
    if(query){
      this.patientDetails= this.patientDetails.filter((pat:any)=>{
        const regex = new RegExp(`^${query}`, 'gi');
        return pat['patientName'].match(regex);
    }
      )
  }
    else{
      this.fetchPatient();
    }
  
}
}
