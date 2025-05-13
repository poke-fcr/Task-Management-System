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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule} from '@angular/material/chips'
import { MatIcon, MatIconModule } from '@angular/material/icon';

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
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class TaskListAddEditModule { }
