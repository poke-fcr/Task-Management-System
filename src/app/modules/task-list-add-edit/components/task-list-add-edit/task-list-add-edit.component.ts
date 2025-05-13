import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-task-list-add-edit',
  templateUrl: './task-list-add-edit.component.html',
  styleUrls: ['./task-list-add-edit.component.scss']
})
export class TaskListAddEditComponent implements OnInit {
  mode: 'add' | 'edit' | 'view' = 'add'
  taskFormGroup!: FormGroup
  constructor(private taskService: TaskManagementService, private formBuilder: FormBuilder
    , private router: Router, private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.taskFormGroup = this.formBuilder.group({
      taskName: ["", [Validators.maxLength(50), Validators.required]],
      description: ["", Validators.maxLength(200)],
      priority: ["", Validators.required],
      status: ["", Validators.required],
      assignedTo: ["", Validators.required],
      dueDate: ["", Validators.required],
    })
  }

  createTask() {
    if (this.taskFormGroup.valid) {
      this.taskService.addTask(this.taskFormGroup.getRawValue())
      this.snackbar.open('Task Created, Navigating to dashboard', 'Close', {
        duration: 3000,               // auto-close after 3 seconds
        panelClass: ['snackbar-success'], // custom CSS class
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      setTimeout(() => {
        this.router.navigate(["tasks"])
      }, 1000)
    }
  }

}
