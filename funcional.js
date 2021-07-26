class Product {
    name = '';
    price = 0;
    year = 0;
     constructor(name, price, year) {
      this.name = name
      this.price = price
      this.year = year
      }

      registrar() {
        return `
        Product ${this.name}, 
        price ${this.price}, 
        year ${this.year} 
        `;
      }

      get info() {
        return this.name
      }
    }
let product1 = new Product(
    'arroz',
    1.15,
    2018
)

let product2 = new Product(
  'pimienta',
  2,
  2019
)

let product3 = new Product(
  'frijol',
  3.2,
  2020
)

console.log(product1.registrar())
console.log(product2.registrar())
console.log(product3.registrar())

console.log(Product)
console.log(window.localStorage)