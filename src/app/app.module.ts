import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MachineDetailService } from './shared/machine-detail.service';
import { SortByPipe } from './shared/sort-by-pipe';
import { MainPipe } from './shared/main-pipe-module';

import { AppComponent } from './app.component';
import { FailureDetailsComponent } from './failure-details/failure-details.component';
import { FailureDetailsListComponent } from './failure-details/failure-details-list/failure-details-list.component';
import { ToastrModule } from 'ngx-toastr';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FailureDetailService } from './shared/failure-detail.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AddFailureDialogComponent } from './failure-details/add-failure-dialog/add-failure-dialog.component';
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { MachineDetailsListComponent } from './machine-details/machine-details-list/machine-details-list.component';
import { AddMachineDialogComponent } from './machine-details/add-machine-dialog/add-machine-dialog.component';
import { MachineFailureDetailsComponent } from './machine-details/machine-failure-details/machine-failure-details.component';
@NgModule({
  declarations: [
    AppComponent,
    FailureDetailsComponent,
    FailureDetailsListComponent,
    AddFailureDialogComponent,
    MachineDetailsComponent,
    MachineDetailsListComponent,
    AddMachineDialogComponent,
    MachineFailureDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,   
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MainPipe
  ],
  providers: [HttpClientModule, FailureDetailService, MatDatepickerModule, MachineDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
