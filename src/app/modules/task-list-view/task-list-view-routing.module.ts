import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListViewComponent } from './components/task-list-view/task-list-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TaskListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskListViewRoutingModule { }
