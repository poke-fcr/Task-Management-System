import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  private usersSubject = new BehaviorSubject<string[]>([]);
  users$ = this.usersSubject.asObservable();

  private loadTasks(): void {
    this.http.get<string[]>('assets/users.json').subscribe({
      next: (data) => this.usersSubject.next(data),
      error: (err) => console.error('Failed to load tasks:', err)
    });
  }
}
