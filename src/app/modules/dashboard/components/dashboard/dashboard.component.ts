import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Task } from 'src/app/interface/taskList';
import { AppService } from 'src/app/services/app.service';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  dataSource = new MatTableDataSource<Task>();
  columnsToDisplay = ['taskName', 'description', 'priority', 'status', 'assignedTo', 'dueDate', 'action'];
  isMobileMode: boolean = false
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('confirmDialog') confirmDialog!: TemplateRef<any>
  taskSubscription!: Subscription
  mobileModeSubscription!: Subscription
  constructor(private taskService: TaskManagementService, private appService: AppService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.mobileModeSubscription = this.appService.isMobileMode$.subscribe((value: boolean) => this.isMobileMode = value)
  }

  ngAfterViewInit(): void {
    this.taskSubscription = this.taskService.tasks$.subscribe((tasks) => {
      console.log('still active')
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

  onDelete(e: Task) {
    this.dialog.open(this.confirmDialog, { data: e });
  }

  confirmDelete(e: any) {
    this.taskService.deleteTask(e.id)
    this.dialog.closeAll()
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe()
    }
    if (this.mobileModeSubscription) {
      this.mobileModeSubscription.unsubscribe()
    }
  }

}