import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    {
      name: 'Samsung s20',
      description: 'flagship Phone',
      price: 299.99,
      image: 'https://tangerois.ma/24349-large_default/smartphone-galaxy-a55-5g-awesome-iceblue-8-256gb-samsung.jpg',
    },
    {
      name: 'OnePlus Nord 2',
      description: 'flagship Phone',
      price: 249.99,
      image: 'https://media.materiel.net/nbo/matnet/buying-guide-page/smartphones/index/index2.jpg',
    },
    {
      name: 'Oppo find x2',
      description: 'flagship Phone',
      price: 159.99,
      image: 'https://cdn.lesnumeriques.com/optim/test/22/222881/e0a6f8b6-motorola-edge-50-fusion-un-smartphone-milieu-de-gamme-soigne-et-endurant__1200_1200__940-0-4946-4006.jpg',
    },
    {
      name: 'Apple Charger',
      description: 'This is a great product.',
      price: 29.99,
      image: 'https://tangerois.ma/24349-large_default/smartphone-galaxy-a55-5g-awesome-iceblue-8-256gb-samsung.jpg',
    },
    {
      name: 'Product 2',
      description: 'Another awesome product.',
      price: 49.99,
      image: 'https://media.materiel.net/nbo/matnet/buying-guide-page/smartphones/index/index2.jpg',
    },
    {
      name: 'Product 3',
      description: 'You will love this product.',
      price: 19.99,
      image: 'https://cdn.lesnumeriques.com/optim/test/22/222881/e0a6f8b6-motorola-edge-50-fusion-un-smartphone-milieu-de-gamme-soigne-et-endurant__1200_1200__940-0-4946-4006.jpg',
    },
    {
      name: 'Product 1',
      description: 'This is a great product.',
      price: 29.99,
      image: 'https://tangerois.ma/24349-large_default/smartphone-galaxy-a55-5g-awesome-iceblue-8-256gb-samsung.jpg',
    },
    {
      name: 'Product 2',
      description: 'Another awesome product.',
      price: 49.99,
      image: 'https://media.materiel.net/nbo/matnet/buying-guide-page/smartphones/index/index2.jpg',
    },
    {
      name: 'Product 3',
      description: 'You will love this product.',
      price: 19.99,
      image: 'https://cdn.lesnumeriques.com/optim/test/22/222881/e0a6f8b6-motorola-edge-50-fusion-un-smartphone-milieu-de-gamme-soigne-et-endurant__1200_1200__940-0-4946-4006.jpg',
    },
  ];

  constructor(private service: ServiceService, private router: Router) {}

  addToPanier(product: any) {
    this.service.addToCart(product); // Add product to the cart
    console.log('Product added:', product);
    this.router.navigate(['/panier']); }
}
