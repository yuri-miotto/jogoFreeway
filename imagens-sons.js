//imagens do jogo

let imagemEstrada;
let imagearros
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;

//sons do jogo
let trilha;
let colidiu;
let pontos;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  trilha = loadSound("sons/trilha.mp3");
  colidiu = loadSound("sons/colidiu.mp3");
  pontos = loadSound("sons/pontos.wav");
}