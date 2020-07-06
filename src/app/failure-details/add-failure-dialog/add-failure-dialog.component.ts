import { Component, OnInit, Inject } from '@angular/core';
import { FailureDetailService } from 'src/app/shared/failure-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-failure-dialog',
  templateUrl: './add-failure-dialog.component.html',
  styleUrls: []
})
export class AddFailureDialogComponent implements OnInit {
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

  constructor(public failureService: FailureDetailService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id"));
       this.failureService.getFailurebyId(this.id).subscribe(x=>{
         this.failure = x
        })
     })
  }

  test() {
    if (this.failure.failure_name.length>19)
    {}
  }

  saveFailure() {
    const data = {
      failure_id: this.failure.failure_id,
      failure_name: this.failure.failure_name,
      failure_description: this.failure.failure_description,
      failure_datetime: this.failure.failure_datetime,
      failure_machineid: this.failure.failure_machineid,
      failure_status: this.failure.failure_status,
      failure_documentation: this.failure.failure_documentation,
      failure_priority: this.failure.failure_priority
    };

    this.failureService.createFailure(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFailure() {
    this.submitted = false;
    this.failure = {
    failure_id: 1,
    failure_name: '',
    failure_description: '',
    failure_datetime: '',
    failure_machineid: 0,
    failure_status: true,
    failure_documentation: '',
    failure_priority: 0
    };
  }
}