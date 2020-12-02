import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
id;
ProductInfo;
MainProductList = JSON.parse(localStorage.getItem('MainProductList'));
  constructor(private Activatedroute:ActivatedRoute,
    private router:Router) {
      // this.id = this.Activatedroute.snapshot.params.id;
     }

 ngOnInit() {
  
   this.Activatedroute.paramMap.subscribe(params => {
    this.id = params.get("id")
    this.MainProductList.forEach(element => {
      if (element.ProdId == this.id ) {
        this.ProductInfo = element;
      }
    });
  })
   console.log("got in query param=> " + this.id);
  }


}
