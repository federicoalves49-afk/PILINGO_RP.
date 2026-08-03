const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const usuario = form[0].value;
const contraseña = form[1].value;

if(usuario === "admin" && contraseña === "pilingorp123"){

window.location.href="dashboard.html";

}else{

alert("Usuario o contraseña incorrectos.");

}

});
