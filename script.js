/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const textarea = document.querySelector(".textarea");
const mensajes = document.querySelector(".textoAEncriptar");

function encriptar(stringEncriptado)
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++)
    {  
       if(stringEncriptado.includes(matrizCodigo[i][0]))
       {
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
       } 
    }

    return stringEncriptado;
}

function desencriptar(stringDesencriptado)
{  
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringDesencriptado.includes(matrizCodigo[i][1]))
        {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptado;
}

function btnEncriptar()
{
    const textoEncriptado = encriptar(textarea.value);
    mensajes.value = textoEncriptado;
    textarea.value = "";
    document.getElementById("error").style.display = "none";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("copiar").style.display = "block";
}

function btnDesencriptar()
{
    const textoEncriptado = desencriptar(textarea.value);
    mensajes.value = textoEncriptado;
    textarea.value = "";
}

function copiar()
{
    let copiarTexto = document.querySelector(".textoAEncriptar");
    copiarTexto.select();
    document.execCommand("copy");
}