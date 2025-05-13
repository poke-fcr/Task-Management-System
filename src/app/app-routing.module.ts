import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks'
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(v => v.DashboardModule)
  },
  {
    path: 'task-detail',
    loadChildren: () => import('./modules/task-list-add-edit/task-list-add-edit.module').then(v => v.TaskListAddEditModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
