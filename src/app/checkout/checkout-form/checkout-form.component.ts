import { Component, OnInit } from '@angular/core';
import { CheckoutModel } from '../../models/checkout';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  step = 0;

  submitted = false;

  model: CheckoutModel;
  checkoutForm: FormGroup;
  shippingAddressForm: FormGroup;

  onSubmit() { this.submitted = true; console.log('form was submit!') }

  constructor() {}

  ngOnInit() {
    this.model = new CheckoutModel();

    this.checkoutForm = new FormGroup({
      'phone': new FormControl(this.model.phone, [
        Validators.required
      ]),
      'shippingSelection': new FormControl(this.model.shippingSelection, [
        Validators.required
      ]),

      'cardNumber': new FormControl(this.model.cardNumber, [
        Validators.required
      ]),
      'cardExpirationMonth': new FormControl(this.model.cardExpirationMonth, [
        Validators.required
      ]),
      'cardExpirationYear': new FormControl(this.model.cardExpirationYear, [
        Validators.required
      ]),
      'cardSecurityCode': new FormControl(this.model.cardSecurityCode, [
        Validators.required
      ]),

      'useShippingAddressForBilling': new FormControl(this.model.useShippingAddressForBilling, [
        Validators.required
      ])
    });
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

  get checkoutTotal() {
    return 'todo implement checkout service';
  }

  get shippingOptions(): Array<string> {
    //todo implement shipping service
    return [
      'Pickup - free',
      'Standard - 10$'
    ];
  }

  get firstName() { return this.checkoutForm.get('firstName'); }
  get lastName() { return this.checkoutForm.get('lastName'); }
  get address1() { return this.checkoutForm.get('address1'); }
  get address2() { return this.checkoutForm.get('address2'); }
  get city() { return this.checkoutForm.get('city'); }
  get state() { return this.checkoutForm.get('state'); }
  get zip() { return this.checkoutForm.get('zip'); }
  get phone() { return this.checkoutForm.get('phone'); }

  get shippingSelection() { return this.checkoutForm.get('shippingSelection'); }

  get cardNumber() { return this.checkoutForm.get('cardNumber'); }
  get cardExpirationMonth() { return this.checkoutForm.get('cardExpirationMonth'); }
  get cardExpirationYear() { return this.checkoutForm.get('cardExpirationYear'); }
  get cardSecurityCode() { return this.checkoutForm.get('cardSecurityCode'); }

  get useShippingAddressForBilling() { return this.checkoutForm.get('useShippingAddressForBilling'); }

}
