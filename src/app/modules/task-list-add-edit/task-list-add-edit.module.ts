import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListAddEditRoutingModule } from './task-list-add-edit-routing.module';
import { TaskListAddEditComponent } from './components/task-list-add-edit/task-list-add-edit.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    TaskListAddEditComponent
  ],
  imports: [
    CommonModule,
    TaskListAddEditRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class TaskListAddEditModule { }
