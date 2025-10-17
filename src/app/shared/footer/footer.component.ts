import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from "@angular/router";
import { InfoPagesService } from '../../services/info-pages.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year:number = new Date().getFullYear();

  constructor(public _service:InfoPagesService){}
  


}
