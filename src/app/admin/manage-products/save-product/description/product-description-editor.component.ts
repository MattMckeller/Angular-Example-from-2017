import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description-editor',
  templateUrl: './product-description-editor.component.html',
  styleUrls: ['./product-description-editor.component.css']
})
export class ProductDescriptionEditorComponent implements OnInit {
  description: any;
  editorConfig: {uiColor: '#99000'};

  constructor() { }

  ngOnInit() {
    this.description = `<p>Product description goes here</p>`;
  }

  onChange(event) {
    console.log('product description change', event);
  }

  onReady(event) {
    console.log('product description ready', event);
  }

  onFocus(event) {
    console.log('product description focus', event);
  }

  onBlur(event) {
    console.log('product description blur', event);
  }

}
