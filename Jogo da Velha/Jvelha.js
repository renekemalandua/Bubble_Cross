const btn = document.querySelectorAll(".botao");
let jogador1 = true;
let contador = 0;
let victoria = false;

let Mensagem = document.querySelector(".Mensagem");
const btnReiniciar = document.querySelector(".btn_reiniciar");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");

btnReiniciar.addEventListener("click", () =>{
    location.reload();
});


btn.forEach(botao => botao.addEventListener("click", () =>{

   if(botao.value === ""){
    
        if(jogador1){
            botao.value = "X";
            botao.setAttribute("style","color: red");
            document.querySelector(".JogVez").innerHTML = "É a vez do jogador O";
            jogador1 = false;
        }else{
            botao.value = "O";
            botao.setAttribute("style","color: green");
            document.querySelector(".JogVez").innerHTML = "É a vez do jogador X";
            jogador1 = true;
        } 
        contador++;
   }
   Vencedor();
   Empate();
}))

function Vencedor(){
    // Horizontal
    if(btn1.value != "" && btn1.value === btn2.value && btn1.value === btn3.value){
        Victoria();
    }
    else if(btn4.value != "" && btn4.value === btn5.value && btn5.value === btn6.value){
        Victoria();
    }
    else if(btn7.value != "" && btn7.value === btn8.value && btn7.value === btn9.value){
        Victoria();
    }
    // Vertical
    else if(btn1.value != "" && btn1.value === btn4.value && btn1.value === btn7.value){
        Victoria();
    }
    else if(btn2.value != "" && btn2.value === btn5.value && btn5.value === btn8.value){
        Victoria();
    }
    else if(btn3.value != "" && btn3.value === btn6.value && btn6.value === btn9.value){
        Victoria();
    }
    // Diagonal
    else if(btn1.value != "" && btn1.value === btn5.value && btn1.value === btn9.value){
        Victoria();
    }
    else if(btn3.value != "" && btn3.value === btn5.value && btn5.value === btn7.value){
        Victoria();
    }
}
function Victoria(){
    if(jogador1){
        document.querySelector(".Pvencedor").innerHTML = "O vencedor é O";
    }else{
        document.querySelector(".Pvencedor").innerHTML = "O vencedor é x";
    }
    Mensagem.setAttribute("style", "display:flex");
    victoria = true;
}
function Empate(){
    if(contador === 9 && victoria === false){
        document.querySelector(".Pvencedor").innerHTML = "O jogo esta empatado!!";
        Mensagem.setAttribute("style", "display:flex");
    } 
}
