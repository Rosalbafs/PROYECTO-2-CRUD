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

console.log(product1.registrar())

document.querySelectorAll('.delete').forEach((element) => {
  element.addEventListener('click', ocultar)
})
document.querySelectorAll('.save').forEach((element) => {
  element.addEventListener('click', salvar)
})

console.log(Product)
console.log(window.localStorage)