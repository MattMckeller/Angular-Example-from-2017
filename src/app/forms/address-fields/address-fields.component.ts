import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Address } from '../../models/address';

@Component({
  selector: 'app-address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.css']
})
export class AddressFieldsComponent implements OnInit {

  @Input() addressModel: Address;
  addressForm: FormGroup;

  constructor() {}

  ngOnInit() {
    if (this.addressModel === undefined) {
      this.addressModel = new Address();
    }

    this.addressForm = new FormGroup({
      'firstName': new FormControl(this.addressModel.firstName, [
        Validators.required
      ]),
      'lastName': new FormControl(this.addressModel.lastName, [
        Validators.required
      ]),
      'address1': new FormControl(this.addressModel.address1, [
        Validators.required
      ]),
      'address2': new FormControl(this.addressModel.address2, [
        Validators.required
      ]),
      'city': new FormControl(this.addressModel.city, [
        Validators.required
      ]),
      'state': new FormControl(this.addressModel.state, [
        Validators.required
      ]),
      'zip': new FormControl(this.addressModel.zip, [
        Validators.required
      ])
    });
  }

  get firstName() { return this.addressForm.get('firstName'); }
  get lastName() { return this.addressForm.get('lastName'); }
  get address1() { return this.addressForm.get('address1'); }
  get address2() { return this.addressForm.get('address2'); }
  get city() { return this.addressForm.get('city'); }
  get state() { return this.addressForm.get('state'); }
  get zip() { return this.addressForm.get('zip'); }

}
