import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {

  doctor_id!:number 
 
  header={
    "Content-Type":"application/json",
    "Authorization":"Hospital "+localStorage.getItem("accessToken")
  }

  constructor(private http:HttpClient) { }




//<-----------------------------------Login Start------------------------------------>
userLOgin(form:any):Observable<any>{
  console.log(form)
  return this.http.post("http://localhost:8080/login",form,)
}
//<-----------------------end--------------------------------------------------------->





//<-------------------------------Admin Start--------------------------------------->
fetchDepartment():Observable<any>{
  return this.http.get("http://localhost:8080/user/department",{headers:this.header})
}
addUser(form:any):Observable<any>{
  return this.http.post("http://localhost:8080/user",form,{headers:this.header})
}
addDepartment(form:any):Observable<any>{
return this.http.post("http://localhost:8080/user/department",form,{headers:this.header})
}
fetchDoctor():Observable<any>{
   return this.http.get("http://localhost:8080/user/doctor",{headers:this.header});
}
fetchCout():Observable<any> {
  return this.http.get("http://localhost:8080/user/count",{headers:this.header});
}
  //<----------------------------------End-------------------------------------------->







//<-------------------------------patient start--------------------------->
fetchDepartmentForPatient():Observable<any>{
  return this.http.get("http://localhost:8080/user/patientDep");
}

fetchcurrentdoctor(id:any):Observable<any>{
  return this.http.get("http://localhost:8080/user/doctor/"+id);
}
addPatient(data:any):Observable<any>{
  return this.http.post("http://localhost:8080/patient",data);
}

fetchTime(docid:number,date:any):Observable<any>{
  return this.http.get("http://localhost:8080/patient/time/",{params:{"docid":docid,"date":date}})
}
//<-----------------------end------------------------------------------->



getdoctorid(id:number){
  this.doctor_id= id;
}
setdoctorid(){
  return this.doctor_id
}

//<--------------------------Doctor Strat----------------------------------->
fetchPatientcountForDoctor(id:number):Observable<any>{
  console.log("service"+id);
  return this.http.get("http://localhost:8080/patient/"+id,{headers:this.header});
}
fetchCurrentPatient(id:any,date:any):Observable<any>{
  console.log("service"+id);
  return this.http.get("http://localhost:8080/patient/list",{params:{"id":id,"date":date},headers:this.header},)
}
//<-----------------------------end----------------------------------------->


}
