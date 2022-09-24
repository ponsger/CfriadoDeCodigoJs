'use strict'

var writedText='';
const alfabeto=["qwertyuiopasdfghjklñzxcvbnm"]
var nuevapalabra=new String();

//cifrar
//#region Cifrado
function Cifrar(){
    console.log("Cifrado");
    let randomNumber=0;
    if(!(writedText.length<160)){
        alert("No se puede cifrar un texto tan largo");
    }
    for(let i=0;i<(writedText.length*3);i++){
        if(i%3==0){
            nuevapalabra[i]=writedText.charAt(Math.floor(i/3));
        }else{
            randomNumber=Math.round(Math.random()*alfabeto.length);
            nuevapalabra[i]=alfabeto.toString().charAt(randomNumber);
        }
    }
    escribeResultadoCifrado(nuevapalabra);
}

const btnCifrado=document.getElementById("cifrar");
btnCifrado.addEventListener("click",Cifrar);
//#endregion

//#region Descifrado
function Descifrar(e){
    console.log(writedText)
    if(writedText.length>0){
        for(let i=0;i<writedText.length;i++){
            if(i%3==0){
                nuevapalabra[i/3]=writedText[i];
            }
        }
    }
    console.log(nuevapalabra)
    escribeResultadoSinCifrar(nuevapalabra);
}

const btnDescifrar = document.getElementById("descifrar");
btnDescifrar?.addEventListener("click",Descifrar);

//#endregion


//#region obtiene texto

var textArea=document.getElementById("texto");
textArea?.addEventListener("change",cambioTexto);

function cambioTexto(e){
    writedText=textArea.value;
}
//#endregion

//#region Escribe resultado cifrado

function escribeResultadoCifrado(resultado){
    var result=document.getElementById("resultado");
    let texto='';
    for(let i=0;i<(writedText.length*3);i++){
        texto+=resultado[i];
    }
    //console.log(result);
    result.innerHTML=texto;
    limpiaRecuadro();
}
//#endregion

//#region Escribe resultado sin cifrar
function escribeResultadoSinCifrar(resultado){
    var result=document.getElementById("resultado");
    let texto='';
    for(let i=0;i<writedText.length/3;i++){
        texto+=resultado[i];
    }
    //console.log(result);
    result.innerHTML=texto;
    limpiaRecuadro();
}
//#endregion

//#region  limpia recuadro



function limpiaRecuadro(){
    let limpia=document.getElementById("Desaparece-click");
    limpia.innerHTML="";
}

//#endregion


//#region Copiar al portapapeles
    var btnCopiar=document.getElementById("copiar");
    btnCopiar?.addEventListener("click",()=>{
        let cuadroCopiar=document.getElementById("resultado");
        var aux=document.createElement("input");
        aux.setAttribute("value",cuadroCopiar.innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');
        document.body.removeChild(aux);
        });
//#endregion