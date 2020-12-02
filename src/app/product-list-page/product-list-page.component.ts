import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['../app.component.css', './product-list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListPageComponent implements OnInit {

  constructor(private router: Router) { }
  searchText;
  MainProductList = JSON.parse(localStorage.getItem('MainProductList'));
  ngOnInit() {

  }

  getDetail(Id) {
    this.router.navigate(['detail', Id]);
    // this.router.navigate(['trash']);

  }
  SortProduct(type, event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var chkHObj = <HTMLInputElement>document.getElementById(target.attributes.id.nodeValue);
    if (chkHObj.checked) {
      this.MainProductList.sort(this.GetSortOrder(type, 0));
    }
    else {
      this.MainProductList.sort(this.GetSortOrder(type, 1));
    }
  }
  MoveToTrash(id, Name) {
    if (confirm("Are you sure to move " + Name + " to Trash. ")) {
      this.MainProductList.forEach(element => {
        if (element.ProdId == id) {
          element.ProdStatus = "trash";
        }
      });
      localStorage.setItem('MainProductList', JSON.stringify(this.MainProductList));
      this.MainProductList = JSON.parse(localStorage.getItem('MainProductList'));
    }
  }

  filterProdcuctByStatus(type) {
    return this.MainProductList.filter(x => x.ProdStatus == "inventory");
  }
  // this.MainProductList.sort(this.GetSortOrder("price"));
  GetSortOrder(prop, order) {
    return function (a, b) {
      if (order == 0) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      }
      else {
        if (a[prop] < b[prop]) {
          return 1;
        } else if (a[prop] > b[prop]) {
          return -1;
        }
        return 0;
      }
    }

  }
}
