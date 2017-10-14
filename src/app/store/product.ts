import {ProductImage} from "@store/product-image";

export class Product {
    id: number;
    name: string;
    price: number;
    imgHref: string;
    productImages?: Array<ProductImage>;
    size?: string;
    attributes?: Array<Attribute>;
    tags?: Array<Tag>;
    blobImages?: Array<any>
}

export class Attribute {
    id: number;
  name: string;
}

export class Tag {
    id: number;
    name: string;
}