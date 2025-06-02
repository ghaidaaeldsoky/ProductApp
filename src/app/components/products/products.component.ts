import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
  {
    id: 1,
    title: 'Dior Sauvage',
    category: 'Men',
    price: 150,
    stock: 12,
    image: 'perfumes/dior_sauvage.jpg'
  },
  {
    id: 2,
    title: 'Chanel No. 5',
    category: 'Women',
    price: 200,
    stock: 8,
    image: 'perfumes/chanel_no5.jpg'
  },
  {
    id: 3,
    title: 'Creed Aventus',
    category: 'Men',
    price: 250,
    stock: 5,
    image: 'perfumes/creed_aventus.jpg'
  },
  {
    id: 4,
    title: 'YSL Libre',
    category: 'Women',
    price: 180,
    stock: 15,
    image: 'perfumes/ysl_libre.jpg'
  },
  {
    id: 5,
    title: 'Tom Ford Oud Wood',
    category: 'Unisex',
    price: 300,
    stock: 10,
    image: 'perfumes/tom_ford_oud_wood.jpg'
  }
];


  // Form filter values
  selectedCategory = 'All';
  titleSearch = '';
  maxPrice: number | null = null;
}
