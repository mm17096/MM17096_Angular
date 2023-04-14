import { Component, OnInit } from '@angular/core';
import { IMAGE_GLOUDINARY, VIDEO_YOUTUBE } from '@modules/directivas/constants/directivas.consts';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIFComponent {

  resultado: boolean = true;
  isError: boolean = true;
  msg: string = 'Resultado';
  dato: string = 'image';
  image: string = IMAGE_GLOUDINARY;
  //Inyectamos la clase DomSanitizer,
  constructor(private sanitizer: DomSanitizer) { }
  get video() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(VIDEO_YOUTUBE);
  }

}
