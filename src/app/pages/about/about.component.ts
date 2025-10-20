import { Component } from '@angular/core';
import { InfoPagesService } from '../../services/info-pages.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  employees:any[] = []

  constructor(public _service:InfoPagesService){
  }


}
