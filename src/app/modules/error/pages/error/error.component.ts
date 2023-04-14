import { Component, OnInit } from '@angular/core';
import { PAGE_NOT_FOUND } from 'src/app/constants/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  error:string = PAGE_NOT_FOUND;

  
  constructor( private router: Router) { }

  regresar(){
    this.router.navigate(['home']);
  }

}
