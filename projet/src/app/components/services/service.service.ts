import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private cartItems: any[] = [];
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
  removeFromCart(product: any) {
    const index = this.cartItems.indexOf(product);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }}
}
