import { Component, OnInit, OnChanges, Input, Output ,EventEmitter } from '@angular/core';
import { IProduct } from './products';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  implements OnInit{

  pageTitle : string = 'Product List';
  public filteredBy: string;

  changedFunc() {
    this.filteredproducts = this.filteredBy.length ? this.performFilter(this.filteredBy) : this.products;
  }

  imgButtonName : string = 'Show Images';
  filteredproducts : IProduct[];
  showImg : boolean = false;
  imageWidth : number = 20;
  imageMargin : number = 2;
  products : IProduct [];
  errMsg : string;
  
  @Input() PName ;
  @Output() pName : EventEmitter<string> =  new EventEmitter<string>();
  @Input() pCode;
  @Input() pDescription ; 
  @Input() pPrice;
  @Input() pRating;
  @Input() pDate;
  @Input() pUrl;

  constructor(private _productsService : ProductsService , private router : Router){
  }

  performFilter(filterBy:string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  toggleImg() : void {
    this.showImg=!this.showImg;
    if (this.showImg) {
      this.imgButtonName = 'Hide Image';
    }
    else {
      this.imgButtonName = 'Show Image';
    }
  }

  ngOnInit() : void {
    this._productsService.getProducts()
    .subscribe(data => {this.products=data;
    this.filteredproducts = this.products;});
    
  }

  onRatingClicked(message : string) : void{
    this.pageTitle='Product List' + ' : ' + message;
  }

  onSelect(product){
    this.router.navigate(['/products', product.productId]);
  }
}