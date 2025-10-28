import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private route:ActivatedRoute, public productServices:ProductsService){
    
    this.route.params.subscribe((res:any) => {
      console.log(res.product);
      this.productServices.searchProduct(res.product);
    })
  }

  
}
