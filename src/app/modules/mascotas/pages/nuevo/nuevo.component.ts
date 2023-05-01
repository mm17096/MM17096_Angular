import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { ToastrService } from 'ngx-toastr';
import { NAME_VALIDATE, NUMBER_VALIDATE } from 'src/app/constants/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})

export class NuevoComponent implements OnInit {
  
  formMascota!: FormGroup; /* formulario general = new FormGroup({}); */
  private isLetras: string = NAME_VALIDATE;
  private isNumero: string = NUMBER_VALIDATE;

  razas = [
    { "raza": "Affenpinscher" },
    { "raza": "Basenji" },
    { "raza": "Pinscher" },
    { "raza": "Pastor de Antolia" },
    { "raza": "Pastor Ganadero" },
    { "raza": "Silky Terrier" },
    { "raza": "Chihuahua" },
    { "raza": "Pinscher" },
    { "raza": "Chow Chow" },
    { "raza": "Afgano" },
    { "raza": "Bóxer" },
    { "raza": "King Charles Spaniel" },
    { "raza": "Sabueso Bávaro de Montaña" }
  ];

  origenes = [
    { "origen": "África" },
    { "origen": "Alemania" },
    { "origen": "Australia" },
    { "origen": "Afganistán" },
    { "origen": "Chihuahua" },
    { "origen": "Japonés" },
    { "origen": "Medio Oriente" },
    { "origen": "Mongolia" },
    { "origen": "Desconocida" },
  ];

  @Input() leyenda!: string;
  @Input() mascota!: IMascota;

  constructor(private mascotaService: MascotasService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.formMascota = this.Iniciarformulario();
  }

  private Iniciarformulario(): FormGroup {
    return this.fb.group({
      raza: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      guardian: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      des: ['', [Validators.required, Validators.minLength(5)]],
      salud: ['', [Validators.required, Validators.minLength(5)]],
      ejercicio: ['', [Validators.required, Validators.minLength(5)]],
      nutricion: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  esCampoValido(campo: string) {
    const validarCampo = this.formMascota.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  guardar() {
    if (this.formMascota.valid) {
      if (this.mascota != null) {
        this.editando();
      } else {
        this.registrando();
      }
    } else {
      Swal.fire({
        position: 'center',
        title: 'Faltan datos en el formuario',
        text: 'submit disparado, formulario no valido' + this.formMascota.valid,
        icon: 'warning',
      });
    }
  }

  registrando() {
    const mascota = this.formMascota.value;
    this.mascotaService.NuevaMascota(mascota).subscribe((resp: any) => {
      if (resp) {
        /* console.log(resp); */
        Swal.fire({
          position: 'center',
          title: 'Buen trabajo',
          text: 'Datos guardados con exito',
          icon: 'info',
        });
        this.formMascota.reset();
      }
    }, (err: any) => {
      /* console.log(err); */
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Algo paso, hable con el administrador',
      });
    })
  }

  editando() {
    //const mascota = this.formMascota.value;
    this.mascota.raza = this.formMascota.controls['raza'].value;
    this.mascota.origen = this.formMascota.controls['origen'].value;
    this.mascota.guardian = this.formMascota.controls['guardian'].value;
    this.mascota.peso = this.formMascota.controls['peso'].value;
    this.mascota.des = this.formMascota.controls['des'].value;
    this.mascota.salud = this.formMascota.controls['salud'].value;
    this.mascota.ejercicio = this.formMascota.controls['ejercicio'].value;
    this.mascota.nutricion = this.formMascota.controls['nutricion'].value;

    this.mascotaService.EditarMascota(this.mascota).subscribe((resp: any) => {
      if (resp) {
        //console.log(resp);
        Swal.fire({
          position: 'center',
          title: 'Buen trabajo',
          text: 'Datos guardados con exito',
          icon: 'info',
        });
        this.formMascota.reset();
      }
    }, (err: any) => {
      //console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Algo paso, hable con el administrador',
      });
    })
  }

  mostrar() {
    let currenUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currenUrl]);
  }
}
