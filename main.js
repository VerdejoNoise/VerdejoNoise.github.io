const keysUrl = window.location.search;
const urlParametros = new URLSearchParams(keysUrl);
let seccion = urlParametros.get("sec");

const lol = new XMLHttpRequest();
lol.open("GET", "data/postAfiche.json", true);
lol.send();
lol.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        crearPost(datos)
    }
};
function crearPost(datos){
    
    if (seccion == "Poster"){
        document.title = "Afiche";
        document.getElementById("texto").textContent = "AFICHE";
        let keysPost = Object.keys(datos["afiche"]);

        let i = keysPost.length;
        while (i > 0){
            i = i - 1
            let keyNombre = datos["afiche"][keysPost[i]];
            let nombre = Object.keys(keyNombre);
            console.log(nombre[0])
            let imagen = datos["afiche"][keysPost[i]][nombre[0]]["img"];



            const padre = document.querySelector(".here")
            let articulo = document.createElement("article")
            articulo.innerHTML = '<div id="postFoto"><div id="contenedor"><a><img src="'+imagen+'" alt="" id="foto"></a></div><div id="contenedor"><a>'+nombre+'</a></div></div>'
            padre.appendChild(articulo)
            articulo.setAttribute("id", "postGeneral")
            console.log(i)
        }
        
    }   else if(seccion == "Ilustraciones"){
        document.title = "Ilustraciones";
        document.getElementById("texto").textContent = "ILUSTRACIONES";
        let keysPost = Object.keys(datos["ilus"]);

        let i = keysPost.length;
        while (i > 0){
            i = i - 1
            let keyNombre = datos["ilus"][keysPost[i]];
            let nombre = Object.keys(keyNombre);
            console.log(nombre[0])
            let imagen = datos["ilus"][keysPost[i]][nombre[0]]["img"];



            const padre = document.querySelector(".here")
            let articulo = document.createElement("article")
            articulo.innerHTML = '<div id="postFoto"><div id="contenedor"><a><img src="'+imagen+'" alt="" id="foto"></a></div><div id="contenedor"><a>'+nombre+'</a></div></div>'
            padre.appendChild(articulo)
            articulo.setAttribute("id", "postGeneral")
            console.log(i)
        }
    };
    
};
window.onscroll = function(){
    if(document.documentElement.scrollTop > 700){
        
        var boton = document.getElementById("texto");
        boton.style.filter = "blur(10px)";
        var boton2 = document.getElementById("sub");
        boton2.style.filter = "blur(10px)";
        var boton3 = document.getElementById("sub2");
        boton3.style.opacity = "0";
        var boton4=document.getElementById("atras");
        boton4.style.opacity = "0";

    }   else{
        var boton = document.getElementById("texto", "sub","sub2");
        boton.style.filter = "blur(0px)";  
        var boton2 = document.getElementById("sub");
        boton2.style.filter = "blur(0px)";
        var boton3 = document.getElementById("sub2");
        boton3.style.opacity = "1";
        var boton4=document.getElementById("atras");
        boton4.style.opacity = "1";
    }
}
