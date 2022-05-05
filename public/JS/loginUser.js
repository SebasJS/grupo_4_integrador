window.addEventListener("load", () => {
    let formulario = this.document.querySelector('form.formulario');
    formulario.addEventListener("submit", (e) => {
        if(!locals.isLogged){
            console.log("contra incorrecta");
        }
    })
})