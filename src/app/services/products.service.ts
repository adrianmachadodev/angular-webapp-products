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

    return new Promise( (resolve, reject) => {
      this.http.get(this.url).subscribe((res:any) => {
        this.products = res;
        resolve(res);
      });
    })
  }

  getProductById(id:any){
    return this.http.get(`https://angular-webapp-a6988-default-rtdb.firebaseio.com/products/${id}.json`);
  }


  searchProduct(search:string):void{

    if(this.products.length === 0){
      this.getProducts().then(() => {
        this.productsFiltered(search)
      })
    }else{
      this.productsFiltered(search);
    }

  }

  productsFiltered(search:string){
    const titleLower = search.toLocaleLowerCase();
    this.productFilter = [];
    
    this.products.forEach((prod:any) => {
      const prodCategory = prod.categoria.toLocaleLowerCase();
      if(prod.categoria.indexOf(search)>= 0 || prodCategory.indexOf(titleLower) >= 0){
        this.productFilter.push(prod)
      }
    })
  }
}
