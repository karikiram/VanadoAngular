import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SortByPipe } from 'src/app/shared/sort-by-pipe';

@NgModule({
  declarations:[SortByPipe],
  imports:[CommonModule],
  exports:[SortByPipe]
})

export class MainPipe{}