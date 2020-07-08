import { Injectable } from '@angular/core';
import { MachineDetail } from './failure-detail.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MachineDetailService {
  readonly rootURL = 'http://localhost:60529/api'
  list : MachineDetail[];
  formdata:MachineDetail;

  constructor(private http:HttpClient, private toastr: ToastrService) { }

  getAllMachine(): Observable<MachineDetail[]> { 
    return this.http.get<MachineDetail[]>(this.rootURL + '/Machine'); 
  }  
  
  getMachineById(machine_id: number): Observable<MachineDetail> { 
    return this.http.get<MachineDetail>(this.rootURL + '/Machine/' + machine_id);  
  }  

  createMachine(data){
    return this.http.post(this.rootURL + '/Machine', data);
  }

  updateMachine(id: number, data){   
    return this.http.put<MachineDetail>(this.rootURL + '/Machine/' + id, data) 
  }  

  deleteMachineById(machine_id: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.rootURL + '/Machine/' + machine_id,  
 httpOptions);  
  }  

  refreshlist(){
    this.http.get(this.rootURL+'/Machine')
    .toPromise()
    .then(res => this.list = res as MachineDetail[]);
  }

}