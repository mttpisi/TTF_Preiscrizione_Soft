document.getElementById("inputTelefono").addEventListener("keydown",function(){
    var charCode = (event.which) ? event.which : event.keyCode;
    console.log(charCode)
    if((charCode < 48 || charCode > 57) && charCode != 8 && charCode != 37 && charCode != 39){
        event.preventDefault();
    }
})

document.getElementById("inputCheck").addEventListener("invalid", function(){
    this.setCustomValidity("Assicurati di aver letto l'informativa sulla privacy")
});
document.getElementById("inputCheck").addEventListener("click", function(){
    this.setCustomValidity("")
});

function validaForm(){
    let iNome = document.getElementById("inputNome").checkValidity()
    let iCognome = document.getElementById("inputCognome").checkValidity();
    let iEmail = document.getElementById("inputEmail").checkValidity();
    let iTelefono = document.getElementById("inputTelefono").checkValidity();
    let iCheck = document.getElementById("inputCheck").checkValidity();
    
    if(iNome && iCognome && iEmail && iTelefono && iCheck){
        /* let user = {
            nome: document.getElementById("inputNome").value,
            cognome: document.getElementById("inputCognome").value,
            email: document.getElementById("inputEmail").value,
            telefono: document.getElementById("inputTelefono").value,
            trattativaDati: document.getElementById("inputCheck").checked
        };
        console.log(user); */
        return true;
    }else{
        return false;
    }
};

