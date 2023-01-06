//código do ator

let xAtor = 100;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor < 370){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter);
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      colidiu.play();
      voltaAtorInicio();
      if(meusPontos > 0){
        meusPontos--;
      }
    }
  }
}

function voltaAtorInicio(){
  yAtor = 370;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 0));
  text(meusPontos, width/4, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    pontos.play();
    voltaAtorInicio();
  }
}




