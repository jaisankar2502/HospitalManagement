import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {
 
  header={
    "Content-Type":"application/json",
    "Authorization":"Hospital "+localStorage.getItem("accessToken")

  }

  constructor(private http:HttpClient) { }


userLOgin(form:any):Observable<any>{
  console.log(form)
  return this.http.post("http://localhost:8080/login",form)
}
fetchDepartment():Observable<any>{
  return this.http.get("http://localhost:8080/user/department",{"headers":this.header});

}
addUser(form:any):Observable<any>{
  return this.http.post("http://localhost:8080/user",form,)
}
addDepartment(form:any):Observable<any>{
return this.http.post("http://localhost:8080/user/department",form)
}
fetchDoctor():Observable<any>{
   return this.http.get("http://localhost:8080/user/doctor");
}
fetchCout() {
  return this.http.get("http://localhost:8080/user/count",{headers:this.header});
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
}
