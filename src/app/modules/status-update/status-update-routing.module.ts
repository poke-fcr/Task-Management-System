import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusUpdateComponent } from './components/status-update/status-update.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StatusUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusUpdateRoutingModule { }
