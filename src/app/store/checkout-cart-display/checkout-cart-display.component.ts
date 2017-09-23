import { Component, OnInit } from '@angular/core';
import { CartService } from '@app/store/cart.service';
import { ProductService } from '@app/store/product.service';
import { Product } from '@app/store/product';
import { Cart } from '@app/store/cart';

@Component({
  selector: 'checkout-cart-display',
  templateUrl: './checkout-cart-display.component.html',
  styleUrls: ['./checkout-cart-display.component.css']
})
export class CheckoutCartDisplayComponent implements OnInit {
  cart: Cart;
  itemsBeingPurchased: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  removeItem(product: Product){
    this.cartService.remove(product);
    this.ngOnInit(); //TODO TEMPORARY FIX
  }
  /**
   * Initialize the cart. Default to having all items in the cart being purchased.
   */
  ngOnInit() {
    //TODO NEED TO UPDATE THIS TO OBSERVER, WHEN ITEM IS REMOVED NOTHING UPDATES
    let products = this.productService.get();
    products.forEach(product => this.cartService.add(product));

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
