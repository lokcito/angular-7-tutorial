import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    {"id":1,"name":"Hp Pavilion DBZ","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"iMac 27'' + State Disk solid","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Dell Laptop Hight definition","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Akita Laptop Cheap","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
  ];    

  constructor() {

  }

  ngOnInit() {
  }

}
