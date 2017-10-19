import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Product} from "@models/product";
import {CustomRegularExpressions} from "@models/custom-regular-expressions";
import {FileUploader} from "ng2-file-upload";
import {ProductImage} from "@models/product-image";
import {ProductService} from "@services/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

import 'rxjs/add/operator/switchMap';

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
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
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
    if(this.model.id) {
      this.productService.update(this.model);
    }else{
      this.productService.create(this.model);
    }
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  ngOnInit() {
    if (this.model === undefined) {
      this.model = new Product();
      // Check if an id was provided to see if we are editing or creating
      if (this.route.snapshot.params['id']) {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.productService.getById(+params.get('id')))
          .subscribe(product => this.model = product);
      }
    }

    // Create product images form control separately since it's not a standard form element,
    // and will need to be referenced later in init.
    this.productImagesCtrl = new FormControl(this.model.product_images, [
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
    event.caller.productImagesCtrl.reset(event.caller.model.product_images);
  }

  addProductImage(productImage: ProductImage) {
    this.model.product_images = this.model.product_images || [];
    this.model.product_images.push(productImage);
    console.log(this.model);
  }

  get productName() { return this.form.get('productName'); }
  get productPrice() { return this.form.get('productPrice'); }
  get productImages() { return this.form.get('productImages'); }

}
