import { TestBed } from '@angular/core/testing';
import { TaskManagementService } from './task-management.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Task } from '../interface/taskList';

describe('TaskManagementService', () => {
  let service: TaskManagementService;
  let httpMock: HttpTestingController;

  const mockTasks: Task[] = [
    { id: 1, taskName: 'Task 1', description: '', priority: 'High', status: 'Pending', assignedTo: 'User A', dueDate: '2024-12-01' },
    { id: 2, taskName: 'Task 2', description: '', priority: 'Medium', status: 'In Progress', assignedTo: 'User B', dueDate: '2024-12-05' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskManagementService]
    });

    service = TestBed.inject(TaskManagementService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load tasks from JSON and emit them', () => {
    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpMock.expectOne('assets/tasks.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  });

  it('should add a task and update the observable', () => {
    const newTask: Task = {
      id: 0,
      taskName: 'New Task',
      description: '',
      priority: 'Low',
      status: 'Pending',
      assignedTo: 'User C',
      dueDate: '2024-12-10'
    };

    // Load initial tasks
    httpMock.expectOne('assets/tasks.json').flush(mockTasks);

    service.addTask(newTask);

    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(3);
      expect(tasks[0].taskName).toBe('New Task');
    });
  });

  it('should update a task', () => {
    const updatedTask: Task = {
      id: 1,
      taskName: 'Updated Task',
      description: 'Updated Description',
      priority: 'High',
      status: 'Completed',
      assignedTo: 'User A',
      dueDate: '2024-12-01'
    };

    httpMock.expectOne('assets/tasks.json').flush(mockTasks);

    service.updateTask(1, updatedTask);

    service.tasks$.subscribe(tasks => {
      const updated = tasks.find(t => t.id === 1);
      expect(updated?.taskName).toBe('Updated Task');
      expect(updated?.status).toBe('Completed');
    });
  });

  it('should delete a task', () => {
    httpMock.expectOne('assets/tasks.json').flush(mockTasks);

    service.deleteTask(1);

    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(1);
      expect(tasks.find(t => t.id === 1)).toBeUndefined();
    });
  });
});
