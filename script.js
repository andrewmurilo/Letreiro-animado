const canvas = document.getElementById("letreiro");
const ctx = canvas.getContext("2d");

// texto padrão
let texto = "digite algo aqui!.";
let x = canvas.width;
let velocidade = 2;

// cor do texto
let corLetreiro = "#ff0000";

// controle de direção
let indoDireita = false;

// controle RGB
let modoRGB = false;
let corHue = 0;

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "40px Pixel";
  
  // modo RGB piscando
  if (modoRGB) {
    corHue = (corHue + 2) % 360;
    ctx.fillStyle = `hsl(${corHue}, 100%, 50%)`;
    ctx.shadowColor = `hsl(${corHue}, 100%, 60%)`;
  } else {
    ctx.fillStyle = corLetreiro;
    ctx.shadowColor = corLetreiro;
  }

  ctx.shadowBlur = 12;

  ctx.fillText(texto, x, 70);

  if (indoDireita) {
    x += velocidade;
    if (x > canvas.width - ctx.measureText(texto).width) indoDireita = false;
  } else {
    x -= velocidade;
    if (x < 0) indoDireita = true;
  }

  requestAnimationFrame(desenhar);
}

// Alterar o texto digitado
function alterarTexto() {
  const novo = document.getElementById("inputText").value.trim();
  if (novo !== "") {
    texto = novo;
    x = canvas.width;
  }
}

// Alterar velocidade
function alterarVelocidade(v) {
  velocidade = Number(v);
}

// Alterar cor manualmente
function alterarCor(cor) {
  modoRGB = false; // desliga RGB ao escolher cor
  corLetreiro = cor;
}

// Ativar/desativar RGB piscante
function toggleRGB() {
  modoRGB = !modoRGB;
}

desenhar();
