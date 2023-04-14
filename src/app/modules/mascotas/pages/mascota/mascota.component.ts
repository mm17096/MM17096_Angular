import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { switchMap } from 'rxjs';
import { API_PEST } from 'src/app/constants/routes/routes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {
  
  mascota!: IMascota

  constructor(
    private activateRoute: ActivatedRoute,
    private mascotasService: MascotasService,
    private router: Router,
    private mascotaService: MascotasService
  ) { }

  ngOnInit(): void {
    //como devuelve un observable
   // witchMap, operador de transformacion
    this.obtenerById();
    this.getmascota();
  }

  obtenerById(){
    this.activateRoute.params
    .pipe(switchMap(({ id }) => this.mascotasService.obtenerById(id)))
    .subscribe((resp: IMascota) => {
      this.mascota = resp;
    });
  }

  getmascota(): void{
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.mascotaService.buscarMascotaId(id || '')
    .subscribe(resp => console.log(resp));
  }

  regresar() {
    // para retornar a la lista de mascotas 
    this.router.navigate([API_PEST+'/listar']);
  }

  eliminar() {

    Swal.fire({
      title: "Eliminacion",
      text: "¿Desea eliminar el perrito?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#3085d6',
      confirmButtonColor: '#AF1717',
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    })
      .then(resultado => {
        if (resultado.value) {
          // Hicieron click en "Sí"
          this.activateRoute.params
          .pipe(switchMap(({ id }) => this.mascotasService.deleteMascota(id)))
          .subscribe((resp: IMascota) => {
            this.mascota = resp;
          });
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: 'success',
            title: 'Se elimino el perrito',
          });
          this.regresar();
        }
      });
  
    }
}
