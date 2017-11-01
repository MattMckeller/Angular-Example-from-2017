import {Component, Input, OnInit} from '@angular/core';
import {ProductImage} from "@models/product-image";

@Component({
  selector: 'current-images-remove-image-fab',
  templateUrl: './remove-image-fab.component.html',
  styleUrls: ['./remove-image-fab.component.css']
})
export class RemoveImageFabComponent implements OnInit {
  @Input() productImage: ProductImage;

  constructor() { }

  ngOnInit() {
  }

  onDelete(event) {
    console.log('delete called',event);
  }
}
