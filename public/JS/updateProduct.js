window.addEventListener("load", function () {
    console.log("Hola Desde el formulario");
    let formulario = this.document.querySelector("form.containerUpdate");

    formulario.addEventListener("submit", (event) => {

        let errores = [];
        //Traer los datos del form 
        let inputName = document.querySelector("input#name");
        let inputPrice = document.querySelector("input#price");
        let inputDiscount = document.querySelector("input#discount");
        let inputStock = document.querySelector("input#stock");
        let inputSku = document.querySelector("input#sku");
        let description = document.querySelector("textarea#description");
        let inputImage = document.getElementById("image");
        let extensionArchivo = /(.jpg|.jpeg|.png|.gif)$/i;
        //Validar que todos los datos sean correctos
        if(inputName.value.length < 5){
            errores.push("El nombre del producto debe tener mas de 5 caracteres");
            inputName.style.borderColor = "red";
        }
        if(description.value.length < 20 || description.value.length > 250){
            errores.push("La descripcion debe tener mas de 20 caracteres y debe ser menor a 250 caracteres");
            description.style.borderColor = "red";
        }
        if(inputPrice.value == "" || parseInt(inputPrice.value) < 0){
            errores.push("El producto debe tener un precio valido");
            inputPrice.style.borderColor = "red";
        }
        if(inputDiscount.value == "" || parseInt(inputDiscount.value) < 0){
            errores.push("El descuento debe ser mayor a cero");
            inputDiscount.style.borderColor = "red";
        }
        if(inputStock.value == "" || parseInt(inputStock.value) < 0) {
            errores.push("El stock no puede ser menor a cero");
            inputStock.style.borderColor = "red";
        }
        if(inputSku.value == ""){
            errores.push("Debe existir un SKU para el producto");
            inputSku.style.borderColor = "red";
        }
        if(!extensionArchivo.exec(inputImage.value)){
            errores.push("La imagen debe ser un formato JPG, PNG o GIF");
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