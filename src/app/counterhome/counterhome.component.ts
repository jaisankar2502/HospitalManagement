import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counterhome',
  templateUrl: './counterhome.component.html',
  styleUrls: ['./counterhome.component.css']
})
export class CounterhomeComponent implements OnInit {
  doctorCount:number=0;
  departmentCount:number=0;
  labCount:number=0;
  awardCount:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  doctorCounterstop:any= setInterval(()=>{
    this.doctorCount++;
    if(this.doctorCount==20){
      clearInterval(this.doctorCounterstop)
    }
  },150)


  departmentCountstop:any=setInterval(()=>{
    this.departmentCount++
    if(this.departmentCount==10){
      clearInterval(this.departmentCountstop)
    }
  },150)

labCountstop:any=setInterval(()=>{
  this.labCount++
  if(this.labCount==5){
    clearInterval(this.labCountstop)
  }
},150)


awardCountstop:any=setInterval(()=>{
  this.awardCount++
  if(this.awardCount==6){
    clearInterval(this.awardCountstop)
  }
},150)
}
