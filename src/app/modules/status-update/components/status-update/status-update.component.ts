import { Component } from '@angular/core';
import { Task } from 'src/app/interface/taskList';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html',
  styleUrls: ['./status-update.component.scss']
})
export class StatusUpdateComponent {
  pending: Task[] = [];
  inProgress: Task[] = [];
  completed: Task[] = [];
  allTasks: Task[] = [];
  taskSubscription!: Subscription
  constructor(private taskService: TaskManagementService) {
  }

  ngOnInit(): void {
    // fetch data only once
    this.taskSubscription = this.taskService.tasks$.subscribe((allTasks: Task[]) => {
      console.log('called again')
      this.allTasks = allTasks
      this.pending = allTasks.filter(t => t.status === 'Pending');
      this.inProgress = allTasks.filter(t => t.status === 'In Progress');
      this.completed = allTasks.filter(t => t.status === 'Completed');
      if (allTasks.length > 0) {
        this.unSubscribe()
      }
    })
  }

  unSubscribe() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe()
    }
  }

  // drop(event: CdkDragDrop<Task[]>, newStatus: string) {
  //   if (event.previousContainer !== event.container) {
  //     const task = event.previousContainer.data[event.previousIndex];
  //     task.status = newStatus as any;

  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

  // getTask(column: string) {
  //   if(column === 'Completed'){
  //     return this.completed
  //   } else if(column === 'In Progress'){
  //     return this.inProgress
  //   } return this.pending
  // }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer)
      console.log(event.container)
      console.log(event.currentIndex)

      this.updateStatus(event.currentIndex, event.previousContainer.id, event.container.id)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  updateStatus(index: number, prevStatus: string, currentStatus: string) {
    let task;
    if (prevStatus === 'inprogress') {
      task = this.inProgress[index]
    } else if (prevStatus === 'pending') {
      task = this.pending[index]
    } else {
      task = this.completed[index]
    }
    if (task) {
      task.status = this.getStatus(currentStatus)
      this.taskService.updateTask(task.id, task)
    }

  }

  getStatus(id: string) {
    if (id === 'inprogress') {
      return "In Progress"
    } else if (id === 'pending') {
      return "Pending"
    } else {
      return "Completed"
    }
  }

}
