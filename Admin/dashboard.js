fetch("/api/whitelist")
.then(res=>res.json())
.then(data=>{

const tabla=document.getElementById("tabla");

data.forEach(usuario=>{

tabla.innerHTML += `

<tr>

<td>${usuario.nombre}</td>

<td>${usuario.discord}</td>

<td>${usuario.estado}</td>

<td>

<button onclick="aprobar('${usuario._id}')">
✅
</button>

<button onclick="rechazar('${usuario._id}')">
❌
</button>

</td>

</tr>

`;

});

});

function aprobar(id){

alert("Solicitud aprobada: "+id);

}

function rechazar(id){

alert("Solicitud rechazada: "+id);

}
