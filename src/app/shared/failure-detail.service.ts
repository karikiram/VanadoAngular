import { Injectable } from '@angular/core';
import { FailureDetail } from './failure-detail.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FailureDetailService {
  readonly rootURL = 'http://localhost:60529/api'
  list : FailureDetail[];
  formdata:FailureDetail;

  constructor(private http:HttpClient, private toastr: ToastrService) { }

  getAllFailure(): Observable<FailureDetail[]> { 
    return this.http.get<FailureDetail[]>(this.rootURL + '/Failure'); 
  }  
  
  getFailurebyId(failure_id: number): Observable<FailureDetail> {  
    return this.http.get<FailureDetail>(this.rootURL + '/Failure/' + failure_id);  
  }  

  updateFailureStatus(failure_id: number) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<number>(this.rootURL + '/Failure/' + failure_id,  
 httpOptions);
  }

  /**createFailure(failure: FailureDetail): Observable<FailureDetail> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<FailureDetail>(this.rootURL + '/Failure',  
    failure, httpOptions);  
  }**/ 

  createFailure(data){
    return this.http.post(this.rootURL + '/Failure', data);
  }

  updateFailure(failure: FailureDetail): Observable<FailureDetail> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<FailureDetail>(this.rootURL + '/Failure/',  
    failure, httpOptions);  
  }  

  deleteFailureById(failure_id: number): Observable<number> { 
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.rootURL + '/Failure/' + failure_id,  
 httpOptions);
  }  

  refreshlist(){
    this.http.get(this.rootURL+'/Failure')
    .toPromise()
    .then(res => this.list = res as FailureDetail[]);
  }

}
