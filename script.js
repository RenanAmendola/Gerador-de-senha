let slider = document.querySelector("#slider");
let password = document.querySelector("#password");
let size_password = document.querySelector("#valor");
let button = document.querySelector("#button");
let container_password = document.querySelector("#container-password");
let tooltip = document.querySelector("#tooltip");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$!&";
let nova_senha = "";

size_password.innerHTML = slider.value

slider.oninput = function(){
    size_password.innerHTML =  this.value;
}


function gerar_senha(){


    let pass = "";
    for( i = 0, n = charset.length; i < slider.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    };

    container_password.classList.remove("hide")

    tooltip.innerHTML = "Clique na senha para copiar!"
    password.innerHTML = pass;
    nova_senha = pass;
}

function copiar_senha_teclado(){

    navigator.clipboard.writeText(nova_senha);  
    tooltip.innerHTML = "Senha copiada com sucesso!"
    
    
}

