import { Injectable } from '@angular/core';
import { IMascota } from '../interface/mascotas.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private httpClient: HttpClient) { }

  URL = 'http://localhost:3000';

  get mascotas() {
    return this.httpClient.get<IMascota[]>(`${this.URL}/mascotas`);
  }

  buscarMascotaId(id: string): Observable<IMascota> {
    if (id.length > 0) {
      return this.httpClient.get<IMascota>(`${this.URL}/mascotas/${id}`);
    } else {
      return this.httpClient.get<IMascota>(`${this.URL}/mascotas/`);
    }
  }

  buscarMascota(termino: string): Observable<IMascota[]> {
    if (termino.length > 1) {
      return this.httpClient.get<IMascota[]>(`${this.URL}/mascotas/?q=${termino}&_limit=5`);
    } else {
      return this.httpClient.get<IMascota[]>(`${this.URL}/mascotas/`);
    }
  }

  deleteMascota(id: string): Observable<IMascota> {
    return this.httpClient.delete<IMascota>(`${this.URL}/mascotas/${id}`);
  }

  obtenerById(id: string): Promise<IMascota> {
    return new Promise<IMascota>((resolve, reject) => {
      this.httpClient.get<IMascota>(`${this.URL}/mascotas/${id}`).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  obtenerAll(): any {
    return new Promise<IMascota>((resolve, reject) => {
      this.httpClient.get<IMascota>(`${this.URL}/mascotas`).subscribe(
        data => {
          return resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }


  //Metodo para crear nueva mascota
  NuevaMascota(pet: IMascota): any {
    const url = `${this.URL}/mascotas/`;
    return this.httpClient.post(url,pet);
  }

  //Metodo para editar una mascota
  EditarMascota(pet: IMascota): any {
    console.log(pet);
    const url = `${this.URL}/mascotas/${pet.id}`;
    return this.httpClient.put(url,pet);
  }
}
