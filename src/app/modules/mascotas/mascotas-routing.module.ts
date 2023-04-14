import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { MascotaComponent } from './pages/mascota/mascota.component';

const routes: Routes = [
  {path: '', component:ListarComponent, title: 'Lista'},
  {path: 'listar', component:ListarComponent, title: 'Lista'},
  {path: ':id', component:MascotaComponent, title: 'Detalle'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
