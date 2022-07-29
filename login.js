const formulario=document.querySelector("form")
const inputs=document.querySelectorAll("#form input")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarForm=(e)=>{
    switch (e.target.name){
        case "username":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById("username").classList.remove("container-form-error_input")
                document.getElementById("username").classList.add("container-form-success_input")
                document.querySelector("#grupoUsuario .formulario-small_error").classList.remove("formulario-small_error-activo")
            }else{
                if (e.target.value.length === 0){
                    document.getElementById("username").classList.remove("container-form-error_input")
                    document.getElementById("username").classList.remove("container-form-success_input")
                    document.querySelector("#grupoUsuario .formulario-small_error").classList.remove("formulario-small_error-activo")
                    return
                }
                document.getElementById("username").classList.remove("container-form-success_input")
                document.getElementById("username").classList.add("container-form-error_input")
                document.querySelector("#grupoUsuario .formulario-small_error").classList.add("formulario-small_error-activo")
            }
        break
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById("password").classList.remove("container-form-error_input")
                document.getElementById("password").classList.add("container-form-success_input")
            }else{
                if (e.target.value.length === 0){
                    document.getElementById("password").classList.remove("container-form-error_input")
                    document.getElementById("password").classList.remove("container-form-success_input")
                    return
                }
                document.getElementById("password").classList.remove("container-form-success_input")
                document.getElementById("password").classList.add("container-form-error_input")
            }
        break
        
    }
}



inputs.forEach((input)=>{
    input.addEventListener("keyup", validarForm)
    input.addEventListener("blur", validarForm)
})


formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
})