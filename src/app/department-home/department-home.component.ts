import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-home',
  templateUrl: './department-home.component.html',
  styleUrls: ['./department-home.component.css']
})
export class DepartmentHomeComponent implements OnInit {
  active = 'Cardiology';

  constructor() { }

  ngOnInit(): void {
  }

}
