import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-trash-list',
  templateUrl: './trash-list.component.html',
  styleUrls: ['../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrashListComponent implements OnInit {

  PageTitle = "Trash List";
  MainProductList = JSON.parse(localStorage.getItem('MainProductList'));
  constructor() { }

  ngOnInit() {
  }
  RestoreProduct(id)
  {
    this.MainProductList.forEach(element => {
      if(element.ProdId == id)
      {
        element.ProdStatus = "inventory";
      }
    });
    localStorage.setItem('MainProductList', JSON.stringify(this.MainProductList));
  }
  DeleteProduct(id)
  {
    this.MainProductList.forEach(element => {
      if(element.ProdId == id)
      {
        element.ProdStatus = "deleted";
      }
    });
    localStorage.setItem('MainProductList', JSON.stringify(this.MainProductList));
  }
  filterProdcuctByStatus(type) {
    return this.MainProductList.filter(x => x.ProdStatus == "trash");
  }
}
