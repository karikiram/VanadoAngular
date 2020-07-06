import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { MachineDetailService } from 'src/app/shared/machine-detail.service';
import { MachineDetail } from 'src/app/shared/failure-detail.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-machine-details-list',
  templateUrl: './machine-details-list.component.html',
  styleUrls: []
})
export class MachineDetailsListComponent implements OnInit {
  currentMachine = null;
  dataSaved = false;
  machineForm: any; 
  machineIdUpdate = null;
  message = null;
  allMachines: Observable<MachineDetail[]>;

  constructor(public machineService:MachineDetailService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   this.loadAllMachines();
  }

  loadAllMachines() {
    this.allMachines = this.machineService.getAllMachine();
  }

  getMachine(id) {
    this.router.navigate(['/editMachine', id]);
    
    // this.machineService.getMachineById(id)
    //   .subscribe(
    //     data => {
    //       this.currentMachine = data;
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

  getMachineInfo(id) {
    this.router.navigate(['/machineFailures', id]);
  }

  deleteMachine(machine_id: number) {  
    if (confirm("Are you sure you want to delete this ?")) {  
    this.machineService.deleteMachineById(machine_id).subscribe(() => {  
      this.dataSaved = true;  
      this.message = 'Record Deleted Succefully';  
      this.loadAllMachines();  
      this.machineIdUpdate = null;  
    //  this.failureForm.reset();  
  
    });  
  } 
}
}
