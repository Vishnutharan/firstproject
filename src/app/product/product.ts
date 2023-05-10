// export class Product { id: number;  name: string;  description: string; price: number;   }    // "value":key

// const val = {}  -> this is object
// const val = []  -> this is arrays

export class product {
  id          : number;
  name        : string;
  description : string;
  price       : number; 

  constructor(obj: any) {
    this.id          = (obj && obj.id) || 0;
    this.name        = (obj && obj.name) || 0;
    this.description = (obj && obj.description) || 0;
    this.price       = (obj && obj.price) || 0;
  }
}
