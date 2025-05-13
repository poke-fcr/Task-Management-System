import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/interface/taskList';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.scss']
})
export class TaskListViewComponent implements OnInit {
  dataSource = new MatTableDataSource<Task>();
  columnsToDisplay = ['taskName', 'description', 'priority', 'status', 'assignedTo', 'dueDate', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private taskService: TaskManagementService) { }

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => {
      this.dataSource.data = tasks;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });


    this.dataSource.filterPredicate = (data: Task, filter: string): boolean => {
      const lowerFilter = filter.trim().toLowerCase();
      return (
        data.taskName.toLowerCase().includes(lowerFilter) ||
        data.description.toLowerCase().includes(lowerFilter)
      );
    };
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onView(e:any){}
  onEdit(e:any){}
  onDelete(e:any){}

}