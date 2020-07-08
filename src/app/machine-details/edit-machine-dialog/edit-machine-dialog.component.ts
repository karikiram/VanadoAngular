import { Component, OnInit } from '@angular/core';
import { MachineDetailService } from 'src/app/shared/machine-detail.service';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-edit-machine-dialog',
  templateUrl: './edit-machine-dialog.component.html',
  styleUrls: []
})
export class EditMachineDialogComponent implements OnInit {
  machine = {
    machine_id: 1,
    machine_name:''
  }
  id : number;
  submitted= false;

  constructor(public machineService: MachineDetailService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id"));
       this.machineService.getMachineById(this.id).subscribe(x=>{
         this.machine = x
        })
     })
  }
  editMachine(id) {
    const data = {
      machine_id: id,
      machine_name: this.machine.machine_name
    };
  this.machineService.updateMachine(this.id, data)
  .subscribe(
    response =>{
      console.log(response);
      this.submitted = true;
      this.router.navigate(['/Machines']);
    },
    error => {
      console.log(error);
    });
  }

}
