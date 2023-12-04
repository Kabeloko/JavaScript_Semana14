const prompt = require('prompt-sync')();
var array_carros = [];

do {
  console.log("Sistema de Cadastro de Carro");
  console.log("1 - Inserir Carro");
  console.log("2 - Excluir Carro");
  console.log("3 - Listar Carro");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Cliente...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite o Marca: ");
    let modelo = prompt("Digite o Modelo: ");
    let ano = prompt("Digite o ano: ");
    let cor = prompt("Digite o cor: ");

    // Neste trecho estamos declarando um objeto
    const carros = {
      codigo: codigo,
      marca: marca,
      modelo: modelo,
      ano: ano,
      cor: cor,
    }
    // Chamar a função inserir
    inserir_carro(carros)

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Carro...\n");
    let codigo = prompt("Digite o código do carro: ");
    // Chamar a função excluir
    excluir_carro(codigo)


  } else if (opcao == 3) {
    console.log("\n\nListando carro...\n");
    // Chamar a função listar
    listar_carro()


  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_carro(carros) {
  // Implementar corpo da função
  array_carros.push(carros);
}

function excluir_carro(codigo) {
  // Implementar corpo da função
  for (i = 0; i < array_carros.length; i++) {
    let carro = array_carros[i];
    if (carro.codigo == codigo) {
      array_carros.splice(i, 1);
    }
  }
}
function listar_carro() {
  // Implementar corpo da função
  for (i = 0; i < array_carros.length; i++) {
    let carro = array_carros[i]
    console.log(carro.codigo, " - ", carro.marca, " - ", carro.modelo, " - ", carro.ano, " - ", carro.cor);
  }
}



