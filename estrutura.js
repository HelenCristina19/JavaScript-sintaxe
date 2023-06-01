
//se-senao
if (false) {
    console.log("Verdadeiro");

} else {
    console.log("Falso");

}


// escolha-caso
const opcao = 1;

switch (opcao) { //escolha
    case 1: // caso
        console.log("Opcao 1");
        break; //pare

    case 2: // caso
        console.log("Opcao 2");
        break;

    default: // caso contrario
        console.log("Opcao padrao");
        break;

}



//enquanto
do{
    console.log(contador++)
}
while (contador < 10) 

//para

function principal(mensagem) {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }  

    console.log(mensagem); 
}

principal("Esta é a mensagem");


