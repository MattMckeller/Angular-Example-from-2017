export class Product {
    id: number;
    name: string;
    price: number;
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