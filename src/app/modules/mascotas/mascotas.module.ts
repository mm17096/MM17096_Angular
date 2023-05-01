import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { ListarComponent } from './pages/listar/listar.component';
import { CardComponent } from './components/card/card.component';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { MascotasService } from './services/mascotas.service';
import { HttpClientModule } from '@angular/common/http';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ImagenEmptyPipe } from './pipes/imagen-empty.pipe';

@NgModule({
  declarations: [
    ListarComponent,
    CardComponent,
    MascotaComponent,
    MascotaComponent,
    NuevoComponent,
    EditarComponent,
    ImagenEmptyPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MascotasRoutingModule,
    HttpClientModule,
    ReactiveFormsModule // Agregamos ReactiveFormsModule a los imports
  ],
  providers: [
     MascotasService
  ]
})
export class MascotasModule { }
