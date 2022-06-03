import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HospitalserviceService } from '../hospitalservice.service';



@Component({
  selector: 'app-homeappointment',
  templateUrl: './homeappointment.component.html',
  styleUrls: ['./homeappointment.component.css']
})
export class HomeappointmentComponent implements OnInit {
  appointmentform:FormGroup;

  constructor(private hospitalservice:HospitalserviceService) {

  this.appointmentform= new FormGroup({
    Name:new FormControl("",[Validators.required]),
    Email: new FormControl("",[Validators.required]),
    Phone:new FormControl("",[Validators.required]),
    Date:new FormControl("",[Validators.required]),
    Department:new FormControl("",[Validators.required]),
    Doctor:new FormControl("",[Validators.required]),
    Message:new FormControl("",[Validators.required])
  })

  
   }

  ngOnInit(): void {
  }
  make_an_Appointment(){
    console.log(this.appointmentform.value)
    this.hospitalservice.appoinmentsend(this.appointmentform.value).subscribe(res=>{
      alert('send success')
      this.appointmentform.reset();

    })

   

  }
}
