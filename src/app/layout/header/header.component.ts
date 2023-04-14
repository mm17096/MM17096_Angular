import { Component, OnInit } from '@angular/core';
import { LOGO } from 'src/app/constants/constants';
import { API_PEST } from 'src/app/constants/routes/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo:string =LOGO;
  pets = API_PEST;
}
