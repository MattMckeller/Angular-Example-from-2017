import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Product} from "@store/product";
import {CustomRegularExpressions} from "@models/custom-regular-expressions";
import {FileItem, FileUploader} from "ng2-file-upload";
import {ProductImage} from "@store/product-image";
import {map} from 'rxjs/operator/map';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Input() model: Product;
  @Output() imageUpload: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;

  productImagesCtrl: FormControl;

  constructor(
    formBuilder: FormBuilder
  ) {
    const _thisRef = this;
    this.form = formBuilder.group({
      hideRequired: false,
      floatPlaceholder: 'auto',
    });
    const uploadUrl = 'http://api.expanseservices.com/api/productImages/addImage';
    this.uploader = new FileUploader({url: uploadUrl});
    this.uploader.onSuccessItem =
      (item, response) => {
        const image = <ProductImage>JSON.parse(response);
        this.addProductImage(image);
        this.imageUpload.emit({newImage: image, caller: _thisRef});
      };
  }

  submit() {
    console.log('Should submit product');
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  ngOnInit() {
    if (this.model === undefined) {
      this.model = new Product();
    }

    // Create product images form control separately since it's not a standard form element,
    // and will need to be referenced later in init.
    this.productImagesCtrl = new FormControl(this.model.images, [
      Validators.required
    ]);
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
      'productImages': this.productImagesCtrl
    });

    this.imageUpload.subscribe(this.onUpload);

  }

  onUpload(event) {
    event.productImagesCtrl.reset(event.caller.model.images);
  }

  addProductImage(productImage: ProductImage) {
    this.model.images = this.model.images || [];
    this.model.images.push(productImage);
    console.log(this.model);
  }

  get productName() { return this.form.get('productName'); }
  get productPrice() { return this.form.get('productPrice'); }
  get productImages() { return this.form.get('productImages'); }

}
