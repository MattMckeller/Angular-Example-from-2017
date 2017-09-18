import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CardPaymentMethod } from '../../models/card-payment-method';

@Component({
  selector: 'app-payment-fields',
  templateUrl: './payment-fields.component.html',
  styleUrls: ['./payment-fields.component.css']
})
export class PaymentFieldsComponent implements OnInit {
  @Input() model: CardPaymentMethod;
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    if (this.model === undefined) {
      this.model = new CardPaymentMethod();
    }

    this.form = new FormGroup({
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
      ])
    });
  }


  get cardNumber() { return this.form.get('cardNumber'); }
  get cardExpirationMonth() { return this.form.get('cardExpirationMonth'); }
  get cardExpirationYear() { return this.form.get('cardExpirationYear'); }
  get cardSecurityCode() { return this.form.get('cardSecurityCode'); }
}
