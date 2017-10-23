import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-description-editor',
  templateUrl: './product-description-editor.component.html',
  styleUrls: ['./product-description-editor.component.css']
})
export class ProductDescriptionEditorComponent implements OnInit {
  @Input() description: any;
  @Output() descriptionChange = new EventEmitter<any>();
  @Input() form: FormGroup;
  @Input() productControlName: string;
  editorConfig: {uiColor: '#99000'};

  constructor() { }

  ngOnInit() {}

  onChange(value) {
    this.descriptionChange.emit(value);
  }

  onReady(event) {
    // console.log('product description ready', event);
  }

  onFocus(event) {
    // console.log('product description focus', event);
  }

  onBlur(event) {
    // console.log('product description blur', event);
  }

}
