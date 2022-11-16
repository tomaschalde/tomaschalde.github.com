//SELECCIONAR ELEMENTOS DEL DOM

//Obtener un elemento a traves de algun selector (pueden ser a traves de las class, del id o las etiquetas)
document.querySelector(".container"); //Recorre el DOM (de la forma que el navegador lo crea conveniente) buscando un elemento que tenga la clase "container" y lo retorna.

//Almacenar un elemento de class container en una variable
let variableContainer = document.querySelector(".container"); //devuelve el primer elemento de class container que encuentra


//SELECCIONAR MULTIPLES ELEMENTOS Y RECORRERLOS

//Obtener todos los links a traves de algun selector (pueden ser a traves de las class, del id o las etiquetas)
let links = document.querySelectorAll("a"); // Arma una lista (o arreglo) con todos los links que encuentre (ya que puede haber 1 o mas links)

//Recorrer un arreglo e imprimer en consola cada link que se encuentra en el arreglo
 links.forEach(function(link){
   console.log(link)
 })

 //EVENTOS

//Por cada una de las celdas cuando se haga un click en una de ellas, debe imprimirse en consola la palabra "Click"
 let celdasDeLaTabla = document.querySelectorAll("td");

 celdasDeLaTAbla.forEach(function(td){
   td.addEventListener('click',function(){
     console.log("Click");
   })
 })

 //HACER QUE LOS ELEMENTOS .CLOSE (X DE LAS PAGINAS DE LOS ESTADIOS) REALICEN UN EVENTO AL HACERLES CLICK

 //Obtener todos los elementos .close
 let links = document.querySelectorAll(".close");

 //Recorrerlos y agregar el evento
 links.forEach(function(link){
   link.addEventListener('click',function(){
     console.log("Click");
   })
 })

 //QUITAR Y AGREGAR CLASES A UN ELEMENTO CON javascript

 //Vamos a obtener todos los iconos que hay en la pagina para que no sean mas estrellas

 let iconos = document.querySelectorAll("i");

 iconos.forEach(function(icono) {
   icono.classList.remove("fa-star");
 })
