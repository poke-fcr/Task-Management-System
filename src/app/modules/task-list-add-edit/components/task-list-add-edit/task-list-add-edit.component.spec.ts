import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TaskListAddEditComponent } from './task-list-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TaskListAddEditComponent', () => {
  let component: TaskListAddEditComponent;
  let fixture: ComponentFixture<TaskListAddEditComponent>;

  const mockAppService = {
    isMobileMode$: of(false)
  };

  const mockUserService = {
    users$: of(['Rachel', 'Ross', 'Monica'])
  };

  const mockTaskService = {
    tasks$: of([
      {
        id: 1,
        taskName: 'Sample Task Name',
        description: 'This is a detailed task description with good length.',
        priority: 'High',
        status: 'Pending',
        assignedTo: 'Rachel',
        dueDate: new Date()
      }
    ]),
    addTask: jasmine.createSpy('addTask'),
    updateTask: jasmine.createSpy('updateTask')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListAddEditComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, MatSnackBarModule, BrowserAnimationsModule],
      providers: [
        { provide: TaskManagementService, useValue: mockTaskService },
        { provide: AppService, useValue: mockAppService },
        { provide: UserService, useValue: mockUserService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: new Map([['id', '1']]) }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with controls', () => {
    expect(component.taskFormGroup.contains('taskName')).toBeTrue();
    expect(component.taskFormGroup.contains('description')).toBeTrue();
    expect(component.taskFormGroup.contains('priority')).toBeTrue();
  });

  it('should populate users list', () => {
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should call createTask() if form is valid', fakeAsync(() => {
    component.taskFormGroup.setValue({
      taskName: 'Test Task',
      description: 'Valid description with enough characters.',
      priority: 'Medium',
      status: 'Pending',
      assignedTo: 'Ross',
      dueDate: new Date()
    });
    component.createTask();
    tick(1000);
    expect(mockTaskService.addTask).toHaveBeenCalled();
  }));

  it('should call updateTask()', () => {
    component.taskId = 1;
    component.updateTask();
    expect(mockTaskService.updateTask).toHaveBeenCalledWith(1, component.taskFormGroup.getRawValue());
  });
});
