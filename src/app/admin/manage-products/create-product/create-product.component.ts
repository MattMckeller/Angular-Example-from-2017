import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Product} from "@store/product";
import {CustomRegularExpressions} from "@models/custom-regular-expressions";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Input() model: Product;
  form: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      hideRequired: false,
      floatPlaceholder: 'auto',
    });
  }

  submit() {

  }

  ngOnInit() {
    if (this.model === undefined) {
      this.model = new Product();
    }

    this.form = new FormGroup({
      'productName': new FormControl(this.model.name, [
        Validators.required,
        Validators.pattern(CustomRegularExpressions.standardCharacters),
        Validators.pattern(CustomRegularExpressions.hasUpper)
      ]),
      'productPrice': new FormControl(this.model.price, [
        Validators.required,
        Validators.pattern(CustomRegularExpressions.usdCurrency),
      ]),
      'productImages': new FormControl(this.model.images, [
        Validators.required
      ])
    });
  }

  get productName() { return this.form.get('productName'); }
  get productPrice() { return this.form.get('productPrice'); }
  get productImages() { return this.form.get('productImages'); }

}
