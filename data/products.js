import {formatCurrency} from '../scripts/utils/money.js';

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    // super.extraInfoHTML();
    return `
      <a href="${this.sizeChartLink}" target="_blank">
        Size chart
      </a>
    `;
  }
}

/*
const date = new Date();
console.log(date);
console.log(date.toLocaleTimeString());
*/

/*
console.log(this);

const object2 = {
  a: 2,
  b: this.a
};
*/

/*
function logThis() {
  console.log(this);
}
logThis();
logThis.call('hello');

this
const object3 = {
  method: () => {
    console.log(this);
  }
};
object3.method();
*/

export const products = [
 
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/fish1.jpeg",
    name: "Fish",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
   
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/egg2.avif",
    name: "Egg",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
   
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/rice.avif",
    name: "White rice",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents:40000
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/chicken.avif",
    name: "Chicken-meat",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
   
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/milk.avif",
    name: "Milk",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
   
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/cheese.avif",
    name: "Cheese",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
   
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/cucumber.png",
    name: "Cucumber",
    rating: {
      stars: 4.5,
      count: 130
    },
   
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/onion.png",
    name: "Onion",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/eggplant.png",
    name: "Eggplant",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
   
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/red-chilly.png",
    name: "Red-chilli",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 899,
   
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/tomato.png",
    name: "Tomato",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2000,
   
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/brocauli.png",
    name: "Broccoli",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 6000,
   
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/strawberry.png",
    name: "Strawberry",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/leamon.png",
    name: "Leamon",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/pineapple.png",
    name: "pineapple",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
   
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/mango.png",
    name: "Mango",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
     id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
     image: "images/products/orange.png",
     name: "Orange",
     rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 1000,
    
  },
  {
    "id": "bc2847e9-5323-403f-b7cf-57fde044a955",
    "image": "images/products/cabbage.jpg",
    "name": "Cabbage",
    "rating": {
      "stars": 4.5,
      "count": 3157
    },
    "priceCents": 5000,
   
  }
].map((productDetails) => {
  if (productDetails.type === 'clothing') {
    return new Clothing(productDetails);
  }
  return new Product(productDetails);
});
