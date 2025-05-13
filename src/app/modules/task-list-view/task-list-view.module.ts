import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListViewRoutingModule } from './task-list-view-routing.module';
import { TaskListViewComponent } from './components/task-list-view/task-list-view.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input'
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TaskListViewComponent
  ],
  imports: [
    CommonModule,
    TaskListViewRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TaskListViewModule { }
