import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  name:any
  constructor() { }

  ngOnInit(): void {
    this.name= localStorage.getItem('name');

  }


  
  

  logOut(){
    localStorage.clear();
  }
}
