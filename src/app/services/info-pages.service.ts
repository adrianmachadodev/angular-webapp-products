import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPages } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {
  info:infoPages = {};
  loading:boolean = false;

  constructor(private http:HttpClient) {

    this.http.get('assets/data/data-page.json').subscribe((res:infoPages) => {
      this.loading = true;
      this.info = res;
    })
    
   }
}
