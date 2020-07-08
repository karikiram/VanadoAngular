import { Component, OnInit } from '@angular/core';
import { FailureDetailService } from 'src/app/shared/failure-detail.service';
import { FailureDetail } from 'src/app/shared/failure-detail.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MachineDetailService } from 'src/app/shared/machine-detail.service';
import { MachineDetail } from 'src/app/shared/failure-detail.model';

@Component({
  selector: 'app-machine-failure-details',
  templateUrl: './machine-failure-details.component.html',
  styleUrls: []
})
export class MachineFailureDetailsComponent implements OnInit {
  failures: FailureDetail[] = [];
  machine = {
    machine_id: 1,
    machine_name:''
  }
  dataSaved = false;
  failureIdUpdate = null;
  message = null;
  allFailures: any;
  id: number;

  constructor(public failureService:FailureDetailService,public machineService:MachineDetailService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
     this.getFailuresForMachine();
  }

  getFailure(id){
    this.router.navigate(['/editFailure', id]);
  }

  getFailuresForMachine() {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id"));
       this.failureService.getFailurebyMachineId(this.id).subscribe(x=>{
         this.failures = x
         console.log(this.failures.length);
        })
     })
  }
  
  updateFailure(failure_id: number) {
    if (confirm("Are you sure you want to change failure ?")) {
      this.failureService.updateFailureStatus(failure_id).subscribe(() =>{
        this.dataSaved = true;  
        this.message = 'Failure change succesfully';  
        this.getFailuresForMachine();
        this.failureIdUpdate = null;  
    
      }); 
    }
  }

  deleteFailure(failure_id: number) {  
    if (confirm("Are you sure you want to delete this failure ?")) {   
    this.failureService.deleteFailureById(failure_id).subscribe(() => {  
      this.dataSaved = true;  
      this.message = 'Failure Deleted Succefully';  
      this.getFailuresForMachine(); 
      this.failureIdUpdate = null;  
  
    });  
  }  
  }
}
