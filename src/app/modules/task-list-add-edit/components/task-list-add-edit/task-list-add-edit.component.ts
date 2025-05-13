import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-task-list-add-edit',
  templateUrl: './task-list-add-edit.component.html',
  styleUrls: ['./task-list-add-edit.component.scss']
})
export class TaskListAddEditComponent implements OnInit {
  mode: 'add' | 'edit' | 'view' = 'add'
  formGroup!: FormGroup
  constructor(private taskService: TaskManagementService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }

}
