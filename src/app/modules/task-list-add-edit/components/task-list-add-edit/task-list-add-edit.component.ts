import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interface/taskList';
import { AppService } from 'src/app/services/app.service';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-list-add-edit',
  templateUrl: './task-list-add-edit.component.html',
  styleUrls: ['./task-list-add-edit.component.scss']
})
export class TaskListAddEditComponent implements OnInit, OnDestroy {
  mode: 'add' | 'edit' | 'view' = 'add'
  taskFormGroup!: FormGroup
  users: string[] = []
  today = new Date()
  taskId!: number
  isMobileMode: boolean = false
  mobileModeSubscription!: Subscription
  userSubscription!: Subscription
  taskSubscription!: Subscription
  constructor(private taskService: TaskManagementService, private formBuilder: FormBuilder, private appService: AppService
    , private router: Router, private snackbar: MatSnackBar, private userService: UserService, private activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.appService.isMobileMode$.subscribe((v: boolean) => this.isMobileMode = v)

    this.taskFormGroup = this.formBuilder.group({
      taskName: ["", [Validators.maxLength(50), Validators.required]],
      description: ["", Validators.maxLength(200)],
      priority: ["", Validators.required],
      status: ["", Validators.required],
      assignedTo: ["", Validators.required],
      dueDate: ["", Validators.required],
    })
    let url = this.router.url;
    if (url.includes('view') || url.includes('edit')) {
      this.taskId = Number(this.activateRouter.snapshot.paramMap.get('id') || '0')
      this.fetchTaskData()
      if (url.includes('view')) {
        this.mode = 'view'
        this.taskFormGroup.disable()

      } else {
        this.mode = 'edit'
      }
    } else {
      this.mode = 'add'
    }
    this.fetchUsers()

  }

  fetchUsers() {
    this.userSubscription = this.userService.users$.subscribe((value: string[]) => {
      this.users = value
    })
  }

  fetchTaskData() {
    this.taskSubscription = this.taskService.tasks$.subscribe((task: Task[]) => {
      if (!task.length) {
        return;
      }
      let taskData = task.find(t => t.id === this.taskId)
      if (taskData) {
        this.initializeTaskData(taskData)
      } else {
        this.snackbar.open("Unable to find task with id: " + this.taskId + '. Redirecting to dashboard', 'Close', {
          duration: 3000,               // auto-close after 3 seconds
          panelClass: ['snackbar-error'], // custom CSS class
          horizontalPosition: 'center',
          verticalPosition: 'top',
        })
        this.router.navigate(['dashboard'])
      }
    })
  }

  initializeTaskData(taskData: Task) {
    this.taskFormGroup.patchValue(taskData)
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
        this.router.navigate(['dashboard'])
      }, 1200)
    }
  }


  updateTask() {
    this.taskService.updateTask(this.taskId, this.taskFormGroup.getRawValue())
    this.snackbar.open('Task Updated, Navigating to dashboard', 'Close', {
      duration: 3000,               // auto-close after 3 seconds
      panelClass: ['snackbar-success'], // custom CSS class
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.router.navigate(['dashboard'])
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe()
    }
    if (this.mobileModeSubscription) {
      this.mobileModeSubscription.unsubscribe()
    }
    if(this.userSubscription) {
      this.userSubscription.unsubscribe()
    }
  }

}
