const calcular = document.getElementById("calcular");

function calculaDor() {
  let nome = document.getElementById("name").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const total = (peso / (altura * altura)).toFixed(2);
    if (total < 18.5) {
      algo = `${nome}, seu IMC é de ${total}, sua frase motivacional é: "De longe parece que está de lado e de lado parece que sumiu." <img src="imc-1/1.png" alt="imagem" />`;
    } else if (total >= 18.5 && total <= 24.9) {
      algo = `${nome}, seu IMC é de ${total}, sua frase motivacional é: "Tudo tranks, por enquanto (¬_¬)..." <img src="imc-1/2.png" alt="imagem" />`;
    } else if (total >= 25.0 && total <= 29.9) {
      algo = `${nome}, seu IMC é de ${total}, sua frase motivacional é: "Podemos ver a quantidade de Polar que tomaste". <img src="imc-1/3.png" alt="imagem" />`;
    } else if (total >= 18.5 && total <= 39.9) {
      algo = `${nome}, seu IMC é de ${total}, sua frase motivacional é: "Ainda consegue comprar roupa na loja?" <img src="imc-1/4.png" alt="imagem" />`;
    } else {
      algo = `${nome}, seu IMC é de ${total}, sua frase motivacional é: "Se não mudar urgente, não dou 3 meses." <img src="imc-1/5.png" alt="imagem" />`;
    }
    resultado.innerHTML = algo;
  } else {
    console.log("qualquer merda!!!");
  }
}

addEventListener("click", calculaDor);
