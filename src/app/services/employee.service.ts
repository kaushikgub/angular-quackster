import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private server = `${environment.apiBaseUrl}/employee`;
  
  constructor(private http: HttpClient) { }

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.server}/all`)
  }

  public saveEmployees(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.server}/save`, employee)
  }

  public updateEmployees(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.server}/update`, employee)
  }

  public deleteEmployees(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.server}/delete/${employeeId}`,)
  }

  public getEmployees(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.server}/get/${employeeId}`,)
  }

}
