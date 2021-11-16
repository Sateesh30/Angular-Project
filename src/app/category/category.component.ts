import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {



  categories = ['Fruits & Vegetables','Foodgrains,oil & masala','Beverages','Snacks & branded foods'
  ,'Bakery, Dairy & Cakes','Beauty & Hygiene','Baby Care'

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
