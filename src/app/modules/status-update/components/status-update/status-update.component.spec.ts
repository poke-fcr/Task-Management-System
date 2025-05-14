import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusUpdateComponent } from './status-update.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';

describe('StatusUpdateComponent', () => {
  let component: StatusUpdateComponent;
  let fixture: ComponentFixture<StatusUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusUpdateComponent],
      imports: [HttpClientTestingModule, DragDropModule, MatChipsModule, MatCardModule],
      providers: [TaskManagementService]

    });
    fixture = TestBed.createComponent(StatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
