const key = "dc3c4751043daf77703e729b3621f3e6";

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name;
  document.querySelector(".temperatura").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".tempo").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector(
    ".tempo-img"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarDadosNaTela(dados);

  zerarInput();
}

function capturarInput() {
  const cidade = document.querySelector(".input-cidade").value;

  if (cidade === "") {
    alert("O campo não pode estar vazio!");
  }

  buscarCidade(cidade);
}

function zerarInput() {
  const inputCidade = document.querySelector(".input-cidade");
  inputCidade.value = "";
}