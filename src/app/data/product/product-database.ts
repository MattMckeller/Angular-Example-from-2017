/** An example database that the data source uses to retrieve data for the table. */

import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Product} from "@store/product";
import {ProductService} from "@app/store/product.service";

export class ProductDatabase{
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  get data(): Product[] { return this.dataChange.value; }

  constructor(
    productService: ProductService
  ) {
      productService.get().toPromise().then(
        (products) => {
          products.forEach((product) => this.addProduct(product));
          // this.fetchThumbnails();
        });
  }

  /** Adds a new user to the database. */
  addProduct(product) {
    const copiedData = this.data.slice();
    copiedData.push(product);
    this.dataChange.next(copiedData);
  }

}