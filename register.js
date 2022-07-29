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
            const usernameStorage= username.value;
            localStorage.setItem(`username`, JSON.stringify(usernameStorage))
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
            const passwordStorage= password.value;
            localStorage.setItem(`password`, JSON.stringify(passwordStorage))
            if(expresiones.password.test(e.target.value)){
                    document.getElementById("password").classList.remove("container-form-error_input")
                    document.getElementById("password").classList.add("container-form-success_input")
                    document.querySelector("#grupoPassword .formulario-small_error2").classList.remove("formulario-small_error-activo")

            }else{
                if (e.target.value.length === 0){
                    document.getElementById("password").classList.remove("container-form-error_input")
                    document.getElementById("password").classList.remove("container-form-success_input")
                    document.querySelector("#grupoPassword .formulario-small_error2").classList.remove("formulario-small_error-activo")
                    return
                }
                document.getElementById("password").classList.remove("container-form-success_input")
                document.getElementById("password").classList.add("container-form-error_input")
                document.querySelector("#grupoPassword .formulario-small_error2").classList.add("formulario-small_error-activo")
            }
        break
        case "password2":
            const password2Storage= password2.value;
            localStorage.setItem(`password2`, JSON.stringify(password2Storage))
            if(expresiones.password.test(e.target.value)){
                document.getElementById("password2").classList.remove("container-form-error_input")
                document.getElementById("password2").classList.add("container-form-success_input")
                document.querySelector("#grupoPassword2 .formulario-small_error3").classList.remove("formulario-small_error-activo")

        }else{
            if (e.target.value.length === 0){
                document.getElementById("password2").classList.remove("container-form-error_input")
                document.getElementById("password2").classList.remove("container-form-success_input")
                document.querySelector("#grupoPassword2 .formulario-small_error3").classList.remove("formulario-small_error-activo")

                return
            }
            document.getElementById("password2").classList.remove("container-form-success_input")
            document.getElementById("password2").classList.add("container-form-error_input")
            document.querySelector("#grupoPassword2 .formulario-small_error3").classList.add("formulario-small_error-activo")

        }
        break
        case "email":
            if(expresiones.correo.test(e.target.value)){
                const emailStorage= email.value;
                localStorage.setItem(`email`, JSON.stringify(emailStorage))
                document.getElementById("email").classList.remove("container-form-error_input")
                document.getElementById("email").classList.add("container-form-success_input")
                document.querySelector("#grupoEmail .formulario-small_error1").classList.remove("formulario-small_error-activo")
            }else{
                if(e.target.value.length === 0){
                    document.getElementById("email").classList.remove("container-form-error_input")
                    document.getElementById("email").classList.remove("container-form-success_input")
                    document.querySelector("#grupoEmail .formulario-small_error1").classList.remove("formulario-small_error-activo")
                    return
                }
                document.getElementById("email").classList.remove("container-form-success_input")
                document.getElementById("email").classList.add("container-form-error_input")
                document.querySelector("#grupoEmail .formulario-small_error1").classList.add("formulario-small_error-activo")

            }

        break
    }
}

class usersDatabase{
    constructor({users= []}){
        this.users= users; 
    }

    ceateUser(...users){
        
    }



}


inputs.forEach((input)=>{
    input.addEventListener("keyup", validarForm)
    input.addEventListener("blur", validarForm)
})

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
})
