import { Component, OnInit, Inject } from '@angular/core';
import { FailureDetailService } from 'src/app/shared/failure-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  descriptionHidden:Boolean=true;
  fileToUpload: File = null;
  

  constructor(public failureService: FailureDetailService, public route: ActivatedRoute, public router: Router) {}


  ngOnInit(){
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  nameChanged(value:string){
    if (value.length>20){
      this.descriptionHidden=false;
    }
    else {
      this.descriptionHidden=true;
    }
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
    if(this.failure.failure_priority > 10 || this.failure.failure_priority < 1)
    {
      alert("Wrong priority value, put value between 1-10")
    }
    else {
    this.failureService.createFailure(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/Failures']);
        },
        error => {
          console.log(error);
        });
      }
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