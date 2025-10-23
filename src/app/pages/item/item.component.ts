import { Component } from '@angular/core';
import { InfoPagesService } from '../../services/info-pages.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  products:any;
  id:string = '';
  image:string = '';
  
  constructor(private route:ActivatedRoute, private productService:ProductsService){
    
    this.route.params.subscribe((paramId:any) => {
      this.productService.getProductById(paramId.id).subscribe((res:any) => {
        this.products = res;
        this.id = paramId.id
        console.log('this.id', this.id);
        this.image = `url("assets/productos/${this.id}/main.jpg")`
      })
    })

    console.log('image', this.image);
  }

}
