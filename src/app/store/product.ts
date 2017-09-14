export class Product {
    id: number;
    name: string;
    price: number;
    imgHref: string;
    size?: string;
    attributes?: Array<Attribute>;
    tags?: Array<Tag>;
}

export class Attribute {
    id: number;
  name: string;
}

export class Tag {
    id: number;
    name: string;
}