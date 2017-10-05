import { Component, OnInit } from '@angular/core';
import { CheckoutModel } from '@app/models/checkout';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CardPaymentMethod} from "@app/models/card-payment-method";
import {Address} from "@app/models/address";
import {CartService} from "@app/store/cart.service";
import {Product} from "@app/store/product";
import {Cart} from "@app/store/cart";
import {ShippingOption} from "@app/models/shipping-option";
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  step = 0;
  itemsBeingPurchased: Product[];
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  submitted = false;

  model: CheckoutModel;
  checkoutForm: FormGroup;
  shippingAddressModel: Address;
  billingAddressModel: Address;
  paymentModel: CardPaymentMethod;
  cart: Cart;

  shippingOptions: ShippingOption[];

  onSubmit() { this.submitted = true; console.log('form was submit!'); }

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.model = new CheckoutModel();
    this.shippingAddressModel = new Address();
    this.billingAddressModel = new Address();
    this.paymentModel = new CardPaymentMethod();

    this.checkoutForm = new FormGroup({
      'phoneNumber': new FormControl(this.sanitizedPhoneNumber, [
        Validators.required,
        CustomValidators.phone('US')
      ]),
      'shippingSelection': new FormControl(this.model.shippingSelection, [
        Validators.required
      ]),
      'useShippingAddressForBilling': new FormControl(this.model.useShippingAddressForBilling, [
      ])
    });

    this.shippingOptions = [];
    this.shippingOptions.push(new ShippingOption('Pickup - free', 0));
    this.shippingOptions.push(new ShippingOption('Standard - 10$', 10));

    this.itemsBeingPurchased = [];
    this.cart = this.cartService.get();
    this.cart.items.forEach(item => this.itemsBeingPurchased.push(item));
  }

  setStep(stepNumber: number){
    this.step = stepNumber;
  }

  prevStep(){
    this.setStep(this.step - 1);
  }

  nextStep(){
    this.setStep(this.step + 1);
  }


  /**
   * Using custom getter and setter for phone number
   *  field to allow for input masking
   * @return {string}
   */
  get sanitizedPhoneNumber() {
    return this.model.phoneNumber;
  }
  /**
   * Using custom getter and setter for phone number
   *  field to allow for input masking
   * @return {string}
   */
  set sanitizedPhoneNumber(phoneNumberVal){
    if(phoneNumberVal){
      //Replace all mask characters (i.e. non decimals)
      phoneNumberVal = phoneNumberVal.replace(/\D+/g, '');
    }
    this.model.phoneNumber = phoneNumberVal;
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
  get shippingTotalCost(): number{
    let shippingCost = (this.shippingSelection.value)?(this.shippingSelection.value):(0);
    return shippingCost;
  }

  /**
   * Calculates the total cost of tax for all items being purchased
   * todo: figure out how we are handling taxes
   * @return {number}
   */
  get taxTotalCost(){
    return 0.00;
  }


  get phoneNumber() { return this.checkoutForm.get('phoneNumber'); }
  get shippingSelection() { return this.checkoutForm.get('shippingSelection'); }
  get useShippingAddressForBilling() { return this.checkoutForm.get('useShippingAddressForBilling'); }

}
