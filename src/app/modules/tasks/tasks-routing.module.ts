import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskHomeComponent } from '@app/modules/tasks/pages/task-home/task-home.component'

const routes: Routes = [
  {
    path: '',
    component: TaskHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
