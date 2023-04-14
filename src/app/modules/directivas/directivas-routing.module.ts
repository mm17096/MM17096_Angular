import { NgSwitch } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { PipesComponent } from './pages/pipes/pipes.component';

const routes: Routes = [
  {path: '', component:HomeComponent, title: 'Home'},
  {path: 'ngIf', component:NgIFComponent, title: 'ngIf'},
  {path: 'ngFor', component:NgForComponent, title: 'ngFor'},
  {path: 'ngSwith', component:NgSwitchComponent, title: 'ngSwith'},
  {path: 'binding', component:BindingComponent, title: 'binding'},
  {path: 'ngStyle', component:NgStyleComponent, title: 'ngStyle'},
  {path: 'ngClass', component:NgClassComponent, title: 'ngClass'},
  {path: 'ngModel', component:NgModelComponent, title: 'ngModel'},
  {path: 'piPes', component:PipesComponent, title: 'piPes'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
