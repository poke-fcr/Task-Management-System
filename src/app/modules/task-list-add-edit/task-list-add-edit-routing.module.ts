import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListAddEditComponent } from './components/task-list-add-edit/task-list-add-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: TaskListAddEditComponent
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: TaskListAddEditComponent
  },
  {
    path: 'view/:id',
    pathMatch: 'full',
    component: TaskListAddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskListAddEditRoutingModule { }
