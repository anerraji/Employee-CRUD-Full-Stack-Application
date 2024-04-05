import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms'
import { UpdateEmplyeeComponent } from './update-emplyee/update-emplyee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    EmployeeListComponent, 
    CommonModule, 
    HttpClientModule,
    CreateEmployeeComponent,
    UpdateEmplyeeComponent,
    EmployeeDetailsComponent,
     RouterModule,
     FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Angular 10 CRUD App';
}
