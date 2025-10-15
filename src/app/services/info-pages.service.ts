import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {
  info:any = {};
  loading:boolean = false;

  constructor(private http:HttpClient) {

    this.http.get('assets/data/data-page.json').subscribe((res:any) => {
      this.loading = true;
      this.info = res;
    })
    
   }
}
