import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {


  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.cartItems = this.service.getCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }
  removeProduct(product: any) {
    this.service.removeFromCart(product); 
    this.cartItems = this.service.getCartItems();
    this.calculateTotalPrice();
  }

}
