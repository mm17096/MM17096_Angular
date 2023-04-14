import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { PipesComponent } from './pages/pipes/pipes.component';


@NgModule({
  declarations: [
    NgIFComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgSwitchComponent,
    BindingComponent,
    NgModelComponent,
    PipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //para trabajar con ngModel
    DirectivasRoutingModule
  ]
})
export class DirectivasModule { }
