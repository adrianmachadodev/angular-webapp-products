import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProductsService } from '../../services/products.service';
import { NgClass } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(public productService:ProductsService){}

}
