import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HospitalserviceService } from '../hospitalservice.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  myform: FormGroup;
  submitted:boolean=false;
  depName: any;
  doctorName: any;
  arra: any = []
  Booktime: any = [];
  Timeslote = ["9.00", "9.30", "10.00", "10.30", "11.00", "11.30", "12.00", "2.00", "2.30", "3.00"];
  minDate = new Date();
  message!:String
  constructor(private hospialservice: HospitalserviceService) {
    this.myform = new FormGroup({
      patientName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      doctorName: new FormControl('', [Validators.required]),
      bookingDate: new FormControl('', [Validators.required]),
      bookingTime: new FormControl('', [Validators.required])

    })
  }

  ngOnInit(): void {
    this.fetchdepartment();
  }
  fetchdepartment() {
    this.hospialservice.fetchDepartmentForPatient().subscribe(res => {
       console.log(res);
      this.depName = res;
   
    })
  }
  findDoctor(id: any) {
    console.log(id);
    this.hospialservice.fetchcurrentdoctor(id).subscribe(res => {
        console.log(res);
      this.doctorName = res;

    })

  }
  //**doctor booking**//
  doctorBooking() {

    Swal.fire({  
      icon: 'success',  
      title: "",  
      showConfirmButton: false,  
      timer: 1500  
    })
    if(this.myform.valid){
      this.submitted=true;
      // console.log(this.myform.value);
      this.hospialservice.addPatient(this.myform.value).subscribe(res => {
        this.message="booking Success";
        this.myform.reset();
      }, err => {
        Swal.fire({  
          icon: 'error',  
          title: "Booking ",  
          showConfirmButton: false,  
          timer: 1500  
        })
      })
    }
    else{
      this.message="please fill the "
    
    }


  }
  fetchTime(docid: any, date: any) {
    this.Booktime = [];
    // console.log(docid,date);
    this.hospialservice.fetchTime(docid, date).subscribe(res => {
      //this.Booktime=res
      // console.log(this.Booktime, res.length);
      for (let i of res) {
        //  console.log(i.bookingTime);

        this.Booktime.push(i.bookingTime);
        ////console.log(res[i]); 
      }
      // console.log(this.Booktime);  
      this.findCommonElement(this.Booktime)


    })
  }
  findCommonElement(booking: any) {
    console.log("val" + booking);

    if (booking.length == 0) {
      console.log("inside");
      this.Timeslote = ["9.00", "9.30", "10.00", "10.30", "11.00", "11.30", "12.00", "2.00", "2.30", "3.00"];
    }
    else {
      console.log(booking);
      this.Timeslote.find((elem: any) => {

        for (let bookingtime of booking) {
          if (elem == bookingtime) {
            console.log("chck");
            console.log(elem, bookingtime);
            let index = this.Timeslote.indexOf(bookingtime);
            console.log(index);
            this.Timeslote.splice(index, 1);
          }
        }

      })
    }
  }

}

