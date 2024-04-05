import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-emplyee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-emplyee.component.html',
  styleUrl: './update-emplyee.component.css'
})
export class UpdateEmplyeeComponent {
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  id?: number;
  employee: Employee = new Employee();

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList();
    }, error => console.log(error));
    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
