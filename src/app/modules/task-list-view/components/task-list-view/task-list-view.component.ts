import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Task } from 'src/app/interface/taskList';
import { AppService } from 'src/app/services/app.service';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.scss']
})
export class TaskListViewComponent implements OnInit {
  dataSource = new MatTableDataSource<Task>();
  columnsToDisplay = ['taskName', 'description', 'priority', 'status', 'assignedTo', 'dueDate', 'action'];
  isMobileMode: boolean = false
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private taskService: TaskManagementService, private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.appService.isMobileMode$.subscribe((value: boolean) => this.isMobileMode = value)


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

  onView(t: Task) {
    this.router.navigate(['task-detail', 'view', t.id])
  }

  onEdit(t: Task) {
    this.router.navigate(['task-detail', 'edit', t.id])
   }

  onDelete(e: any) { }

}