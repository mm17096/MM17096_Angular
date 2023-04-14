import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  mascotas: IMascota[] = []; //array de mascotas
  parametroBuscar: string = ''; //parametro de busqueda
  datosM: string[] = []; //
  datos: any[] = ["Usuario", 30, true, "{'salario':200}"]; //
  mascotasP: any[] = []; //
  idmascota: string = ''; //

  //Inyectar el servicio
  constructor(private mascotasService: MascotasService) { }

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp: IMascota[]) => {
      this.mascotas = resp;
    });
    this.mostrar();
    this.obtenerAll();
  }


  EliminarCard(imascota: string) {
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
          this.idmascota = imascota;
          this.mascotasService.deleteMascota(imascota)
            .subscribe(resp => this.mascotasService.mascotas.subscribe(
              respn => this.mascotas = respn
            )
            );
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
        }
      });

  }

  obtenerAll() {
    this.mascotasService.obtenerAll().then(async (resp: IMascota[]) => {
      console.log(resp);
      //respaso
      resp.forEach(obj => {
        this.mascotasP.push(obj);
        this.datosM.push(JSON.stringify(obj));
      })
      let jsonArray = JSON.parse(this.datosM[0]);
      for (const key in jsonArray) {
        console.log("llave:", key, "valor:", jsonArray[key]);
      }

      const { razas, des, ...datos } = jsonArray;

      console.log("Este es el decestructuracion con {}: ", jsonArray);

      const [obj1, obj2, obj3, ...losOtros] = resp;

      console.log("Este es el decestructuracion con []: ", resp);
    })
  }

  mostrar() {
    //Repaso del uso del for para recorer arregos

    //recorrer el arreglo con un foreach
    this.datos.forEach(obj => {
      console.log("ForEach: ", obj);
    })

    console.log("****************");

    //in para obtener las llaves
    for (const key in this.datos) {
      console.log("Llaves", key);
    }

    //of para obtener todo el arreglo
    for (const interator of this.datos) {
      console.log(interator);
    }
  }

  buscar(): void { // metodo para buscar
    this.parametroBuscar = this.parametroBuscar.toLocaleLowerCase();
    this.mascotasService
      .buscarMascota(this.parametroBuscar)
      .subscribe((resp: IMascota[]) => {
        this.mascotas = resp;
      });
  }

}
