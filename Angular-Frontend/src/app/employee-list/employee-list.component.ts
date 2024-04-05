import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees?: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id?: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id?: number) {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?');
    if (confirmDelete) {
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log(data);
        this.getEmployees();
      })
    }
  }

  employeeDetails(id?: number) {
    this.router.navigate(['employee-details', id]);
  }
}
