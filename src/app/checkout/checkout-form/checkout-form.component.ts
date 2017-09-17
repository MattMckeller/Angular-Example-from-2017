import { Component, OnInit } from '@angular/core';
import { CheckoutModel } from '../checkout-model';
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

  onSubmit() { this.submitted = true; console.log('form was submit!') }

  constructor() {}

  ngOnInit() {
    // this.setStep(0);
    this.model = new CheckoutModel();

    this.checkoutForm = new FormGroup({
      'firstName': new FormControl(this.model.shippingAddress.firstName, [
        Validators.required
      ]),
      'lastName': new FormControl(this.model.shippingAddress.lastName, [
        Validators.required
      ]),
      'address1': new FormControl(this.model.shippingAddress.address1, [
        Validators.required
      ]),
      'address2': new FormControl(this.model.shippingAddress.address2, [
        Validators.required
      ]),
      'city': new FormControl(this.model.shippingAddress.city, [
        Validators.required
      ]),
      'state': new FormControl(this.model.shippingAddress.state, [
        Validators.required
      ]),
      'zip': new FormControl(this.model.shippingAddress.zip, [
        Validators.required
      ]),
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
      ]),
      'billingFirstName': new FormControl(this.model.billingAddress.firstName, [
        // (this.model.useShippingAddressForBilling == true)?(Validators.required):(null)
        Validators.required
      ]),
      'billingLastName': new FormControl(this.model.billingAddress.lastName, [
        Validators.required
      ]),
      'billingAddress1': new FormControl(this.model.billingAddress.address1, [
        Validators.required
      ]),
      'billingAddress2': new FormControl(this.model.billingAddress.address2, [
        Validators.required
      ]),
      'billingCity': new FormControl(this.model.billingAddress.city, [
        Validators.required
      ]),
      'billingState': new FormControl(this.model.billingAddress.state, [
        Validators.required
      ]),
      'billingZip': new FormControl(this.model.billingAddress.zip, [
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

  get billingFirstName() { return this.checkoutForm.get('billingFirstName'); }
  get billingLastName() { return this.checkoutForm.get('billingLastName'); }
  get billingAddress1() { return this.checkoutForm.get('billingAddress1'); }
  get billingAddress2() { return this.checkoutForm.get('billingAddress2'); }
  get billingCity() { return this.checkoutForm.get('billingCity'); }
  get billingState() { return this.checkoutForm.get('billingState'); }
  get billingZip() { return this.checkoutForm.get('billingZip'); }
}
