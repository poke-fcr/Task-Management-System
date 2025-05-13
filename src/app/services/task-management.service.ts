import { Injectable } from '@angular/core';
import { Task } from '../interface/taskList';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.http.get<Task[]>('assets/tasks.json').subscribe({
      next: (data) => this.tasksSubject.next(data),
      error: (err) => console.error('Failed to load tasks:', err)
    });
  }

  // Optional: methods to mutate state
  addTask(task: Task): void {
    let lastId = this.tasksSubject.value[this.tasksSubject.value.length]?.id || 0
    task.id = lastId + 1
    const updated = [task, ...this.tasksSubject.value];
    this.tasksSubject.next(updated);
  }

  updateTask(taskId: number, task: Task): void {
    const updated = [...this.tasksSubject.value];
    let tempTaskIndex = updated.findIndex(t => t.id == taskId);
    task.id = taskId
    updated[tempTaskIndex] = task
    this.tasksSubject.next(updated);
  }

  deleteTask(index: number): void {
    const updated = this.tasksSubject.value.filter((_, i) => i !== index);
    this.tasksSubject.next(updated);
  }
}