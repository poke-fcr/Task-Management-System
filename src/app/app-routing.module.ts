import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(v => v.DashboardModule)
  },
  {
    path: 'task-detail',
    loadChildren: () => import('./modules/task-list-add-edit/task-list-add-edit.module').then(v => v.TaskListAddEditModule)
  },
    {
    path: 'status-update',
    loadChildren: () => import('./modules/status-update/status-update.module').then(v => v.StatusUpdateModule)
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
