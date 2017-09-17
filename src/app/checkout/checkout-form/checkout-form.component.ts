import { Component, OnInit } from '@angular/core';
import { CheckoutModel } from '../checkout-model';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  step: number;

  submitted = false;

  model: CheckoutModel;

  checkoutForm: FormGroup;

  onSubmit() { this.submitted = true; console.log('form was submit!') }

  constructor() {}

  ngOnInit() {
    this.setStep(0);
    this.model = new CheckoutModel();

    this.checkoutForm = new FormGroup({
      'firstName': new FormControl(this.model.firstName, [
        Validators.required
      ]),
      'lastName': new FormControl(this.model.lastName, [
        Validators.required
      ]),
      'address1': new FormControl(this.model.address1, [
        Validators.required
      ]),
      'address2': new FormControl(this.model.address2, [
        Validators.required
      ]),
      'city': new FormControl(this.model.city, [
        Validators.required
      ]),
      'state': new FormControl(this.model.state, [
        Validators.required
      ]),
      'zip': new FormControl(this.model.zip, [
        Validators.required
      ]),
      'phone': new FormControl(this.model.phone, [
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

  get firstName() { return this.checkoutForm.get('firstName'); }
  get lastName() { return this.checkoutForm.get('lastName'); }
  get address1() { return this.checkoutForm.get('address1'); }
  get address2() { return this.checkoutForm.get('address2'); }
  get city() { return this.checkoutForm.get('city'); }
  get state() { return this.checkoutForm.get('state'); }
  get zip() { return this.checkoutForm.get('zip'); }
  get phone() { return this.checkoutForm.get('phone'); }

}
