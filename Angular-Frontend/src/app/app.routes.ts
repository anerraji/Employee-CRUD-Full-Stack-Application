import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmplyeeComponent } from './update-emplyee/update-emplyee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path: 'create-employee', component: CreateEmployeeComponent},
    {path: 'update-employee/:id', component: UpdateEmplyeeComponent},
    {path: 'employee-details/:id', component: EmployeeDetailsComponent},
    {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
    exports: [RouterModule]
  })

export class AppRoutingModule { }