//DOM
//queryselector, este devuelve el primer elemento aunque haya más de un elemento que cumplan el criterio de buqeda.
//queryselectorALL, recorre todo el arbol buscando todos los elementos que cumplan con el criterio de busqueda.
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});


let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);//con dis dispara lo que se esta seleccioanando 
    });
});
*/

/*
ESto sirve para cancelar el evento por defento de alguna variabel 
let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){
    //Agregar un eveneto click a cada uno de ellos
    link.addEventListener('click', function(ev){
        ev.preventDefault():

        return false;
    });
});*/ 

//obtener los elementos de la clase .close

/*let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){
    //Agregar un eveneto click a cada uno de ellos
    link.addEventListener('click', function(){
        console.log(":)");
    });
});
*/

//quitar y agregar clases 
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.remove("fa-star");

});


let links = document.querySelectorAll(".close");

links.forEach(function(link){
    //Agregar un eveneto click a cada uno de ellos
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //queitarle  las clases de animacion que ya tiene
        content.classList.remove("animate__flipInX");
        content.classList.remove("animate__animated");
        

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");
        
        //Ambas funciones nos permiten ejecutar ciertas intrucciones de codigo después de cierto tiempo
        //setTimeout lo hace solamente una vez
        //setInterval constantemente

        setTimeout(function(){
            location.href = "/";
        },600);

        

        return false;
    });
});



