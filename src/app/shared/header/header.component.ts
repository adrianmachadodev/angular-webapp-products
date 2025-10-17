import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { InfoPagesService } from '../../services/info-pages.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public _service:InfoPagesService){}
}
