const texto = document.getElementById("letreiro");
const tela = document.getElementById("tela");

let pos = 0;                // posição inicial
let velocidade = 2;         // velocidade do letreiro (px por frame)
let direcao = 1;            // 1 = indo para a direita, -1 = voltando para a esquerda

function animar() {
    pos += velocidade * direcao;
    texto.style.left = pos + "px";

    // Calcula limites
    const limiteDireita = tela.clientWidth - texto.clientWidth;

    if (pos >= limiteDireita) {
        direcao = -1; // voltar
    } else if (pos <= 0) {
        direcao = 1; // ir
    }

    requestAnimationFrame(animar);
}

animar();
