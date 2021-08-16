import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  constructor(private productService: ProductService,private activatedRooute:ActivatedRoute) {}

  ngOnInit(): void {
   this.activatedRooute.params.subscribe(params=>{
     if(params["categoryId"]){
       this.getProductsByCategoryId(params["categoryId"])
     }
     else{
       this.getProducts();
     }
   })
}
  getProducts() {
    this.dataLoaded=true;
    this.productService
      .getProducts()
      .subscribe((response) => (this.products = response.data));
  }
  getProductsByCategoryId(categoryId:number) {
    this.dataLoaded=true;
    this.productService
      .getProductsByCategoryId(categoryId)
      .subscribe((response) => (this.products = response.data));
  }
}
