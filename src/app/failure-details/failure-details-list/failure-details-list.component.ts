import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { FailureDetailService } from 'src/app/shared/failure-detail.service';
import { FailureDetail } from 'src/app/shared/failure-detail.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-failure-details-list',
  templateUrl: './failure-details-list.component.html',
  styleUrls: []
})

export class FailureDetailsListComponent implements OnInit {
  dataSaved = false;
  failureIdUpdate = null;
  message = null;
  allFailures: Observable<FailureDetail[]>;

  constructor(public failureService:FailureDetailService, private route: ActivatedRoute,
    private router: Router) {
   }

  ngOnInit() {
    this.loadAllFailures();
  }
  loadAllFailures() { 
    this.allFailures = this.failureService.getAllFailure();  
  } 

  getFailure(id){
    this.router.navigate(['/editFailure', id]);
  }
  
  updateFailure(failure_id: number) {
    if (confirm("Are you sure you want to change status ?")) {
      this.failureService.updateFailureStatus(failure_id).subscribe(() =>{
        this.dataSaved = true;  
        this.message = 'Status change succesfully';  
        this.loadAllFailures();  
        this.failureIdUpdate = null;  
    
      }); 
    }
  }
  deleteFailure(failure_id: number) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.failureService.deleteFailureById(failure_id).subscribe(() => {  
      this.dataSaved = true;  
      this.message = 'Record Deleted Succefully';  
      this.loadAllFailures();  
      this.failureIdUpdate = null;  
  
    });  
  }  
}
}
