import { Component, OnInit, Inject } from '@angular/core';
import { MachineDetailService } from 'src/app/shared/machine-detail.service';
import { ActivatedRoute,Router,ParamMap } from '@angular/router'

@Component({
  selector: 'app-add-machine-dialog',
  templateUrl: './add-machine-dialog.component.html',
  styleUrls: []
})
export class AddMachineDialogComponent implements OnInit {
  machine = {
    machine_id: 0,
    machine_name:''
  }
  id : number;
  submitted= false;
  editButton = false;
  constructor(public machineService: MachineDetailService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id"));
       this.machineService.getMachineById(this.id).subscribe(x=>{
         this.machine = x
        })
     })
  }

  saveMachine() {
    const data = {
      machine_id: this.machine.machine_id,
      machine_name: this.machine.machine_name
    };

  this.machineService.createMachine(data)
  .subscribe(
    response =>{
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });

}
  newMachine() {
    this.submitted = false;
    this.machine = {
      machine_id: 1,
      machine_name: ''
    };
  }
}
