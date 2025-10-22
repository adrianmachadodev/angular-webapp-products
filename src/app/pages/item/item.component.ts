import { Component } from '@angular/core';
import { InfoPagesService } from '../../services/info-pages.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  constructor(private route:ActivatedRoute, private productService:ProductsService){

    this.route.params.subscribe((res:any) => {
      this.productService.getProductById(res.id).subscribe((res:any) => {
        console.log(res);
      })
    })
  }

}
