import { Component, OnInit } from '@angular/core';
import { ProductImage } from '@shared/models/product-image';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    productImages: Array<ProductImage>;

    ngOnInit() {
    }


}
