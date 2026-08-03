const formulario = document.getElementById("whitelistForm");

formulario.addEventListener("submit", function(e){

e.preventDefault();

alert("✅ Tu solicitud fue enviada correctamente.\n\nEl staff la revisará lo antes posible.");

formulario.reset();

});
