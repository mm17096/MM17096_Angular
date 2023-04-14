import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { ListarComponent } from './pages/listar/listar.component';
import { CardComponent } from './components/card/card.component';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { MascotasService } from './services/mascotas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListarComponent,
    CardComponent,
    MascotaComponent,
    MascotaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MascotasRoutingModule,
    HttpClientModule
  ],
  providers: [
     MascotasService
  ]
})
export class MascotasModule { }
