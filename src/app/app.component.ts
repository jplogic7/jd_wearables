import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './sidenav.css']
})
export class AppComponent {
  title = 'JDwearables';
  PageTitle = "Product List";
  ngOnInit() {
    //================= Setting prodcut list 
    localStorage.setItem('MainProductList', JSON.stringify([
    { ProdId: 101, stock : "125", rating : "5", ProdStatus: "inventory", title: "Watch 1", category: "Smart Watch", price: "12", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." },
    { ProdId: 102, stock : "23", rating : "5", ProdStatus: "inventory", title: "Watch 2", category: "Bluetooth Watch", price: "17", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." },
    { ProdId: 103, stock : "5", rating : "4.5", ProdStatus: "inventory", title: "Watch 3", category: "fitness Watch", price: "55", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." },
    { ProdId: 104, stock : "78", rating : "4", ProdStatus: "inventory", title: "Watch 4", category: "Smart WatchV3", price: "10", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." },
    { ProdId: 105, stock : "95", rating : "3", ProdStatus: "inventory", title: "Watch 5", category: "Smart WatchV1", price: "10", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." },
    { ProdId: 106, stock : "55", rating : "3.4", ProdStatus: "inventory", title: "Watch 6", category: "Jd's WatchV1", price: "21", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." },
    { ProdId: 107, stock : "21", rating : "5", ProdStatus: "inventory", title: "Watch 7", category: "Smart WatchV2", price: "18", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." },
    { ProdId: 108, stock : "44", rating : "5", ProdStatus: "inventory", title: "Watch 8", category: "Rapidost Watch", price: "47", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." },
    { ProdId: 109, stock : "47", rating : "5", ProdStatus: "inventory", title: "Watch 9", category: "Mens Watch", price: "33", description: "JD's Smart Werables gadgets gives you smart control of your life styles with ease...", moreDescription : "A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable." }]));

  }
}

