function mostrarEncriptado() {
  document.getElementById("respuesta-inicial").style.display = "none";
  var texto = document.querySelector("#texto-a-traducir").value;
  var textoTraducido = texto
    .toLowerCase()
    .replace(/e/, "enter")
    .replace(/i/, "imes")
    .replace(/a/, "ai")
    .replace(/o/, "ober")
    .replace(/u/, "ufat");
  console.log(textoTraducido);
  document.getElementById("respuesta").style.display = "block";
  document.getElementById("copiar").style.display = "block";

  document.getElementById("respuesta").value = textoTraducido;
}
function mostrarDesencriptado() {
  document.getElementById("respuesta-inicial").style.display = "none";
  var texto = document.querySelector("#texto-a-traducir").value;
  var textoTraducido = texto
    .replace(/enter/, "e")
    .replace(/imes/, "i")
    .replace(/ai/, "a")
    .replace(/ober/, "o")
    .replace(/ufat/, "u");
  console.log(textoTraducido);
  document.getElementById("respuesta").style.display = "block";
  document.getElementById("copiar").style.display = "block";

  document.getElementById("respuesta").value = textoTraducido;
}

function copy() {
  let copyText = document.querySelector("#respuesta");
  copyText.select();
  document.execCommand("copy");
}
