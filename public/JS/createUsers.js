window.addEventListener("load", () => {
    console.log("Hola desde el formulario Crear usuario");
    let formulario = this.document.querySelector("form.containerCreate");
    formulario.addEventListener("submit", (event) => {
        let errores = [];
        let expReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let passwordReg = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
        let extensionArchivo = /(.jpg|.jpeg|.png|.gif)$/i;
        //Traer los datos del formulario
        let inputName = document.getElementById("name");
        let inputEmail = document.getElementById("email");
        let inputPassword = document.getElementById("password");
        let inputPhone = document.getElementById("phone");
        let inputCard = document.getElementById("card");
        let inputImage = document.getElementById("image");
        let inputAdress = document.getElementById("direccion");
        console.log("EL campo nombre trae "+ inputName.value);

        //Validacion que los campos del form esten correctos 
        if(inputName.value.length < 5){
            errores.push("El nombre del producto debe tener mas de 5 caracteres");
            inputName.style.borderColor = "red";
        } else{
            inputName.style.borderColor = "green";
        }

        if (  expReg.test(inputEmail.value) == false){
            errores.push("Ingresa un email valido");
            inputEmail.style.borderColor = "red";
         }else{
            inputEmail.style.borderColor = "green";
        }
        if ( passwordReg.test(inputPassword.value) == false ){
            errores.push("La contraseña debe tener minimo 8 caracteres, una mayuscula, una minuscula y un carcter especial");
            inputPassword.style.borderColor = "red";
        }else {
            inputPassword.style.borderColor = "green";
        }

        if (inputPhone.value.length < 10){
            errores.push("El numero de telefono debe tener mas de 10 caracteres");
            inputPhone.style.borderColor = "red";
        }else {
            inputPhone.style.borderColor = "green";
        }

        if(inputCard.value.length < 10){
            errores.push("El numero de la tarjeta debe tener mas de 10 caracteres");
            inputCard.style.borderColor = "red";
        }else {
            inputCard.style.borderColor = "green";
        }

        if(!extensionArchivo.exec(inputImage.value)){
            errores.push("La imagen debe ser un formato JPG, PNG o GIF");
            inputImage.style.color = "red";
        }else{
            inputImage.style.color = "green";
        }

        if(inputAdress.value.length < 5){
            errores.push("La direccion debe tener mas de 5 caracteres");
            inputAdress.style.borderColor = "red"
        }else {
            inputAdress.style.borderColor = "green";
        }

        if(errores.length>0){
            event.preventDefault();
            console.log(errores);
            let ulErrores = this.document.getElementById("errores");
            errores.forEach(error => {
                ulErrores.innerHTML += `<li>${error}</li>`
            })
        }

    })
})