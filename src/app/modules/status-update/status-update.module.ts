import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusUpdateRoutingModule } from './status-update-routing.module';
import { StatusUpdateComponent } from './components/status-update/status-update.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    StatusUpdateComponent
  ],
  imports: [
    CommonModule,
    StatusUpdateRoutingModule,
    DragDropModule,
    MatChipsModule
  ]
})
export class StatusUpdateModule { }
