//Variables globales
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
 let productList = []
  
 //Funciones
 function addProduct(name, price, year) {
  let product = new Product(name, price, year)
  productList.push(product)
  insertProductHtml()
  clearInputs()
 }
 function clearInputs() {
  document.getElementById('name').value = ''
  document.getElementById('price').value = ''
  document.getElementById('year').value = ''
 }
  
 document.getElementById('save').addEventListener('click', function () {
  let nameValue = document.getElementById('name').value
  let priceValue = document.getElementById('price').value
  let yearValue = document.getElementById('year').value
  addProduct(nameValue, priceValue, yearValue)
 })
  
 function insertProductHtml() {
  productList.forEach(function (product, index) {
  let html = `
  <tr id="${index}">
  <th id="name">${product.name}</th>
  <th id="price">${product.price}</th>
  <th id="year">${product.year}</th>
  <th>
  <button class="btn-info btnEditar">Editar</button>
  <button class="btn-danger btnBorrar">Borrar</button>
  </th>
  </tr>`
  document.getElementById('product-list').innerHTML += html
  })
 }
 
 const EditarDB = (actividad) => {
 let indexArray = arrayActividades.findIndex((elemento)=>elemento.actividad === actividad);
  arrayActividades[indexArray].estado = true;
  GuardarDB();
  }

 const EliminarDB = (actividad) => {
 let indexArray;
 arrayActividades.forEach((elemento, index) => {
 if(elemento.actividad === actividad){
 indexArray = index;
 }
 });
 arrayActividades.splice(indexArray,1);
 GuardarDB();
 }

// EventListener
formularioUI.addEventListener('submit', (e) => {
e.preventDefault();
let actividadUI = document.querySelector('#actividad').value;
CrearItem(actividadUI);
GuardarDB();
formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', PintarDB);
listaActividadesUI.addEventListener('click', (e) => {
e.preventDefault();
if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
let texto = e.path[2].childNodes[1].innerHTML;
if(e.target.innerHTML === 'delete'){
// Accción de eliminar
EliminarDB(texto);
}
if(e.target.innerHTML === 'done'){
// Accción de editar
EditarDB(texto);
}
}
});

 // tener una lista de productos utilizar foreach
 /* document.getElementById('table-content').innerHtml += `
  <tr>
  <th id="name">name</th>
  <th id="price">price</th>
  <th id="year">year</th>
  <th>
  <button class="btn-info btnEdit">Edit</button>
  <button class="btn-danger btnDelete">Delete</button>
  </th>
  </tr>`
  */
  
 // 1. mostrar en pantalla todos los productos
 // 2. crear html con los datos del producto
 /*
  <tr>
  <th id="name">name</th>
  <th id="price">price</th>
  <th id="year">year</th>
  <th>
  <button class="btn-info btnEdit">Edit</button>
  <button class="btn-danger btnDelete">Delete</button>
  </th>
  </tr>
 */
 // 3. agregar producto a la lista array[] (metodo push en array)
 /* [
  {
  name: 'rice',
  price: 1.15,
  year: 2018
  }
 ] */
  
 // 4. borrar producto de la lista array[] (metodo splice en array)
 // 5. actualizar producto al darle click a edit y actualizar los datos de la lista

