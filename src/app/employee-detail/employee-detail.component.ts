import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}} - {{employee.name}} - {{employee.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  constructor( private _employeeService:EmployeeService) { }

  public employees=[];


  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}
