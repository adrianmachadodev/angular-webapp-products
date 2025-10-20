import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPages } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPagesService {
  info: infoPages = {};
  loading: boolean = false;
  teamWork:any[] = [];

  url:any = `https://angular-webapp-a6988-default-rtdb.firebaseio.com/equipo.json`

  constructor(private http: HttpClient) {
    this.getDataJson();
    this.getDataFirebase();
  }

  private getDataJson() {
    this.http.get('assets/data/data-page.json').subscribe((res: infoPages) => {
      this.loading = true;
      this.info = res;
    });
  }

  private getDataFirebase() {
    this.http.get(this.url).subscribe((res: any) => {
      this.loading = true;
      this.teamWork = res;
      console.log(res);
    });
  }
}
