import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactmanagerAppComponent } from '../contactmanager-app.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path: '',
    component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactmanagerRoutingModule {}
