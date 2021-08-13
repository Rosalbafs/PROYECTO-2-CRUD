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
  let product = new Product(name,price,year)
  productList.push(product)
  console.log(productList)
  localStorage.setItem('ListaProductos', JSON.stringify(productList));
  productList.forEach(element => { 
  const nombreProducto = element.name 
  console.log('name'+nombreProducto+'nombre elemento'+name)
  if (nombreProducto === name){
    found=1
    console.log('encontre un elemento')


    element.name=name
    element.price=price
    element.year=year
    showData();
  }

  })

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
  let html = ''
  productList.forEach(function (product, index) {
  html += `
  <tr id="${index}">
  <th id="name">${product.name}</th>
  <th id="price">${product.price}</th>
  <th id="year">${product.year}</th>
  <th>
  <button onClick="editar(${index})" class= "btn-info btnEditar" id="btn-danger btnEditar">Editar</button>
  <button onClick="borrar(${index})" class= "btn-danger btnBorrar" id="btn-danger btnBorrar">Borrar</button>
   </th>
  </tr>`
  })
  document.getElementById('product-list').innerHTML = html
 }

 
 function borrar (e) {
   //document.querySelectorall('btn-danger btnBorrar').foreach(item => {
   //  item.addEventListener('click' , eliminar=>{
   // const fila = eliminar.target.parentNode.parentNode.getAttribute('data-id')
    // return fila = '';
     //})
    //}
   //console.log(productList)
   //console.log(e)
   productList.splice(e, 1)
   //console.log(productList)
   showData();
   }

   function showData () {
    let html = '' 
    productList = JSON.parse(localStorage.getItem('ListaProductos'))
    productList.forEach(function (product, index) {
      html += `
      <tr id="${index}">
      <th id="name">${product.name}</th>
      <th id="price">${product.price}</th>
      <th id="year">${product.year}</th>
      <th>
      <button onClick="editar(${index})" class= "btn-info btnEditar" id="btn-danger btnEditar">Editar</button>
      <button onClick="borrar(${index})" class= "btn-danger btnBorrar" id="btn-danger btnBorrar">Borrar</button>
       </th>
      </tr>`
      })
            document.getElementById('product-list').innerHTML = html
   }

   function editar (e) {
    console.log(productList)
    console.log(e)
    //productList.splice(e, 1)
    //console.log(productList)
    console.log(productList[e].name)
    document.getElementById('name').value = productList[e].name
    document.getElementById('price').value = productList[e].price
    document.getElementById('year').value = productList[e].year
    //showData();
    }

    showData(); 
  
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

 