import { Component, OnInit, Inject } from '@angular/core';
import { FailureDetailService } from 'src/app/shared/failure-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-failure-dialog',
  templateUrl: './edit-failure-dialog.component.html',
  styleUrls: []
})
export class EditFailureDialogComponent implements OnInit {

  failure = {
    failure_id: 1,
    failure_name: '',
    failure_description: '',
    failure_datetime: '',
    failure_machineid: 0,
    failure_status: false,
    failure_documentation: '',
    failure_priority: 0
  };
  id : number;
  submitted= false;
  descriptionHidden:Boolean=true;

  constructor(public failureService: FailureDetailService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id"));
       this.failureService.getFailurebyId(this.id).subscribe(x=>{
         this.failure = x
        })
     })
  }

  nameChanged(value:string){
    if (value.length>20){
      this.descriptionHidden=false;
    }
    else {
      this.descriptionHidden=true;
    }
  }

  editFailure(id) {
    const data = {
      failure_id: id,
      failure_name: this.failure.failure_name,
      failure_description: this.failure.failure_description,
      failure_datetime: this.failure.failure_datetime,
      failure_machineid: this.failure.failure_machineid,
      failure_status: this.failure.failure_status,
      failure_documentation: this.failure.failure_documentation,
      failure_priority: this.failure.failure_priority
    };
  this.failureService.updateFailure(this.id, data)
  .subscribe(
    response =>{
      console.log(response);
      this.submitted = true;
      this.router.navigate(['/Failures']);
    },
    error => {
      console.log(error);
    });
}

}
