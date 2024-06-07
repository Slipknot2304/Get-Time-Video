const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')


const expresiones = {
    nombre: /^[a-zA-Z0-9\_\-\s]{2,30}$/, //Letras, numeros, guion y guion bajo
    plataforma: /^[a-zA-Z0-9\_\-\s]{2,30}$/, //Letras, numeros, guion y guion bajo
    tiempo: /^[\d\d]+\.[\d\d]+\.[\d\d]+$/, //2 Numeros, un punto, 2 Numeros, un punto, 2 Numeros
    link: /^.{4,100}$/ //Cualquier digito de 4 a 100
}

var campo = {
    nombre : false,
    plataforma : false,
    tiempo: false,
    link: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
                campo [nombre]= true
            } else {
                document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
            }
        break
        case "plataforma":
            if (expresiones.plataforma.test(e.target.value)) {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
                campo [plataforma]= true
            } else {
                document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
            }
            
        break
        case "tiempo":
            if (expresiones.tiempo.test(e.target.value)) {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
                campo [tiempo]= true
            } else {
                document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
            }
        break
        case "link":
            if (expresiones.link.test(e.target.value)) {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
                campo [link]= true
            } else {
                document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
            }
            
        break
    }
}

inputs.forEach((input)=> {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // console.log("Si funsiona, que pedo?")

    if (campo.nombre && campo.plataforma && campo.tiempo && campo.link == true) {
        
        console.log("Ora resulta!");
        
    } else{
        // Acceder al archivo de inicio y escribir toto en nuevo
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            
        }, 2000);
        document.getElementById('nuevoTime').innerHTML= nombre;

    }
});