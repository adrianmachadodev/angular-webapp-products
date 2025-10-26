import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: any = `https://angular-webapp-a6988-default-rtdb.firebaseio.com/products_idx.json`;
  products:Products[] = [];
  productFilter:Products[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  private getProducts() {
    this.http.get(this.url).subscribe((res:any) => {
      this.products = res;
    });
  }

  getProductById(id:any){
    return this.http.get(`https://angular-webapp-a6988-default-rtdb.firebaseio.com/products/${id}.json`);
  }

  productsFiltered(products:string){
    this.productFilter = this.products.filter((product:any) => {
      return true
    })

    console.log('product filter', this.productFilter);
  }
}
