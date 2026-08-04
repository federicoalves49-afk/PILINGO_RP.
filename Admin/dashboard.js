async function cargarSolicitudes() {

    const res = await fetch("/api/whitelist");
    const data = await res.json();

    const tabla = document.getElementById("tabla");

    tabla.innerHTML = "";

    data.forEach(usuario => {

        tabla.innerHTML += `
        <tr>

            <td>${usuario.nombre}</td>

            <td>${usuario.discord}</td>

            <td>${usuario.estado}</td>

            <td>

                <button onclick="aprobar('${usuario._id}')">
                ✅ Aprobar
                </button>

                <button onclick="rechazar('${usuario._id}')">
                ❌ Rechazar
                </button>

            </td>

        </tr>
        `;

    });

}

async function aprobar(id){

    await fetch("/api/whitelist/" + id + "/aprobar", {
        method:"PUT"
    });

    cargarSolicitudes();

}

async function rechazar(id){

    await fetch("/api/whitelist/" + id + "/rechazar", {
        method:"PUT"
    });

    cargarSolicitudes();

}

cargarSolicitudes();
