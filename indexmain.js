document.addEventListener("click", (e)=> {
    if(e.target.matches("#texto")){
        let op= document.getElementById("mainop");
        op.style.display ="none";
        let otro = document.getElementById("modal");
        otro.style.display="block"
    }
})