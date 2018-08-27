import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProduct } from './products';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  public productId ;
  public specificProduct;
  product : IProduct[] = [];
  constructor(private route : ActivatedRoute, private productsService : ProductsService , private router : Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
    if(id){
      this.productsService.getProducts()
      .subscribe(data => {this.product=data;
      this.specificProduct = this.product.find(x => x.productId===id);});
      
    }
  }

  onBack() : void {
    this.router.navigate(['/products']);
  }
}