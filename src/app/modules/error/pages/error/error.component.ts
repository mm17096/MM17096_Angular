import { Component, OnInit } from '@angular/core';
import { PAGE_NOT_FOUND } from 'src/app/constants/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  error:string = PAGE_NOT_FOUND;

  regresar(){
    window.location.href = './../../../home';
  }

}
