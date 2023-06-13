function guardar (){
    db.collection("usuarios").add({
        NombreMascota: document.getElementById("nombreMascota").value,
        Especie: document.getElementById("especie").value,
        Raza: document.getElementById("raza").value,
        Sexo: document.getElementById("sexo").value,
        MotivoConsulta: document.getElementById("motivodeConsulta").value,

    })
    .then((docRef) => {
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("error en el registro")
    });
}