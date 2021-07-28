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
    'rice',
    1.15,
    2018
  )

let product2 = new Product(
  'pepper',
  2,
  2019
)

let product3 = new Product(
  'bean',
  3.2,
  2020
)

function addProduct(name, price, year)
{let product = new Product(name, price, year)
  console.log(product.registrar())
}

document.getElementById('save').addEventListener('click',function(){
let nameValue = document.getElementById('name').value
let priceValue = document.getElementById('price').value
let yearValue= document.getElementById('year').value
addProduct(namevalue, pricevalue, yearvalue)
})



