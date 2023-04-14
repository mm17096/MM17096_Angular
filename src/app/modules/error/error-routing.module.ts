import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path: '', component:ErrorComponent, title: 'Error'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
