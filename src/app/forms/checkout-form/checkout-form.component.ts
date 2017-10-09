import { Component, OnInit, DoCheck } from '@angular/core';
import { CheckoutModel } from '@app/models/checkout';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CardPaymentMethod} from "@app/models/card-payment-method";
import {Address} from "@app/models/address";
import {CartService} from "@app/store/cart.service";
import {Product} from "@app/store/product";
import {Cart} from "@app/store/cart";
import {ShippingOption} from "@app/models/shipping-option";
import { CustomValidators } from 'ng2-validation';

import _ from "lodash";
import {HttpClient} from "@angular/common/http";
import {CheckoutService} from "@services/checkout.service";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit, DoCheck {
  step = 0;
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  submitted = false;

  model: CheckoutModel;
  checkoutForm: FormGroup;
  shippingAddressModel: Address;
  billingAddressModel: Address;
  paymentModel: CardPaymentMethod;
  cart: Cart;

  shippingOptions: ShippingOption[];

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  save() {
    this.checkoutService.save(this.model);
  }

  onSubmit() {
    this.submitted = true;
    this.checkoutService.submit(this.model);
  }


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

    this.model.products = [];
    this.cart = this.cartService.get();
    this.cart.items.forEach(item => this.model.products.push(item));
  }

  ngDoCheck() {
    // let _this = this;
    this.synchronizeModels(this.shippingAddressModel, this.model.shippingAddress);
    this.synchronizeModels(this.billingAddressModel, this.model.billingAddress);
    this.synchronizeModels(this.paymentModel, this.model.cardPaymentMethod);

  }

  synchronizeModels(fromModel, toModel) {
    let changes = _.reduce(fromModel, function(result, value, key){
      if (! _.isEqual(value, toModel[key])) {
        (result[key] || (result[key] = [])).push(value);
      }
      return result;
    }, {});

    _.each(changes, (value, key) => {
      toModel[key] = fromModel[key];
    });
  }

  setStep(stepNumber: number){
    this.step = stepNumber;
  }

  prevStep(){
    this.setStep(this.step - 1);
    this.save();
  }

  nextStep(){
    this.setStep(this.step + 1);
    this.save();
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
    this.model.products.forEach(item => total += item.price);
    return total;
  }

  /**
   * Calculates the shipping cost for all items being purchased
   * todo: handle shipping calculations and allow for shipping options / pickup
   * @return {number}
   */
  get shippingTotalCost(): number{
    return (this.shippingSelection.value) ?
      (this.shippingSelection.value.cost) : (0);
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
