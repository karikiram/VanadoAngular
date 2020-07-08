import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailureDetailsComponent } from './failure-details/failure-details.component';
import { AddFailureDialogComponent } from './failure-details/add-failure-dialog/add-failure-dialog.component';
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { AddMachineDialogComponent } from './machine-details/add-machine-dialog/add-machine-dialog.component';
import { MachineFailureDetailsComponent } from './machine-details/machine-failure-details/machine-failure-details.component';
import { EditMachineDialogComponent } from './machine-details/edit-machine-dialog/edit-machine-dialog.component';
import { EditFailureDialogComponent } from './failure-details/edit-failure-dialog/edit-failure-dialog.component'

const routes : Routes = [
{   path: '', 
    redirectTo: 'Failures', 
    pathMatch: 'full' 
},
{
    path: 'Failures', 
    component: FailureDetailsComponent 
},
{
    path: 'addFailure',
    component: AddFailureDialogComponent
},
{
    path: 'Machines',
    component: MachineDetailsComponent
},
{
    path: 'addMachine',
    component: AddMachineDialogComponent
},
{
    path: 'editMachine/:id',
    component: EditMachineDialogComponent
},
{
    path: 'editFailure/:id',
    component: EditFailureDialogComponent
},
{
    path: 'machineFailures/:id',
    component: MachineFailureDetailsComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
