import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Product} from "@store/product";
import {CustomRegularExpressions} from "@models/custom-regular-expressions";
import {FileItem, FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Input() model: Product;
  form: FormGroup;
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      hideRequired: false,
      floatPlaceholder: 'auto',
    });
    const uploadUrl = 'http://api.expanseservices.com/api/productImages/addImage';
    this.uploader = new FileUploader({url: uploadUrl});
  }

  submit() {

  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
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

  uploadImage(item: FileItem) {
    item.upload();
  }

  cancelImage(item: FileItem) {
    item.cancel();
  }

  removeImage(item: FileItem) {
    item.remove();
  }

  get productName() { return this.form.get('productName'); }
  get productPrice() { return this.form.get('productPrice'); }
  get productImages() { return this.form.get('productImages'); }

}
