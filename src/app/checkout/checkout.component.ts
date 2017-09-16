import { Component, OnInit } from '@angular/core';
import { CartService } from '../store/cart.service';
import { ProductService } from '../store/product.service';
import { Product } from '../store/product';
import { Cart } from '../store/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Cart;
  itemsBeingPurchased: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  /**
   * Initialize the cart. Default to having all items in the cart being purchased.
   */
  ngOnInit() {
    this.itemsBeingPurchased = [];
    this.cart = this.cartService.get();
    this.cart.items.forEach(item => this.itemsBeingPurchased.push(item));
  }

  get itemsInCartCount(){
    return (this.cart.items.length)?(this.cart.items.length):(0);
  }

  get itemPurchaseCount(){
    return (this.itemsBeingPurchased.length)?(this.itemsBeingPurchased.length):(0);
  }

  /**
   * Adds product total shipping total and tax totals to return the checkout total
   * @return {number}
   */
  get checkoutTotal(){
    return this.productTotalCost + this.shippingTotalCost + this.taxTotalCost;
  }

  /**
   * Calculates the base price of all of the items selected for purchase
   * @return {number}
   */
  get productTotalCost(){
    let total = 0;
    this.itemsBeingPurchased.forEach(item => total += item.price);
    return total;
  }

  /**
   * Calculates the shipping cost for all items being purchased
   * todo: handle shipping calculations and allow for shipping options / pickup
   * @return {number}
   */
  get shippingTotalCost(){
    return 0;
  }

  /**
   * Calculates the total cost of tax for all items being purchased
   * todo: figure out how we are handling taxes
   * @return {number}
   */
  get taxTotalCost(){
    return 0;
  }

}
