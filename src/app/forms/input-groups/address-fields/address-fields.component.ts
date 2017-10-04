import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from '@models/address';

@Component({
  selector: 'app-address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.css']
})
export class AddressFieldsComponent implements OnInit {

  @Input() model: Address;
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    if (this.model === undefined) {
      this.model = new Address();
    }

    this.form = new FormGroup({
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
      ])
    });
  }

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get address1() { return this.form.get('address1'); }
  get address2() { return this.form.get('address2'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get zip() { return this.form.get('zip'); }
}
