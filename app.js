function cadastroRecrutas(){
  const nomeRecruta = prompt("Nome do recruta")
  const sobrenomeRecruta = prompt("Sobrenome")
  const campoEstudo = prompt("Campo de estudo")
  const anoNascimento = prompt("Ano de nascimento")

  alert(
    "Cadastro realizado com sucesso!\n" +
    "\nNome compconsto: "+ nomeRecruta + " " + sobrenomeRecruta + 
    "\nCampo de estudo: " + campoEstudo + 
    "\nIdade: " + (2023 - anoNascimento) + " anos."
  )
}

function calculadora(){
  const a = Number(prompt("Insira o primeiro valor"))
  const b = Number(prompt("Insira o segundo valor"))

  const adicao = a + b
  const subtracao = a - b
  const multiplicacao = a * b
  const divisao = a / b

  alert(
    "Resultados:\n" +
    "\nAdição: " + adicao +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao + 
    "\nDivisão: " + divisao
  )
}

function testeVelocidade(){
 const nameFirstVehicle = prompt("Nome do primeiro veículo") 
 const velocityFirstVehicle = Number(prompt("Velocidade do primeiro veículo"))
 const nameSecondVehicle = prompt("Nome do segundo veículo") 
 const velocitySecondVehicle = Number(prompt("Velocidade do segundo veículo"))

 if (velocityFirstVehicle > velocitySecondVehicle) {
  alert(nameFirstVehicle + " é mais rápido que o " + nameSecondVehicle)
 } else if (velocitySecondVehicle > velocityFirstVehicle) {
  alert(nameSecondVehicle + " é mais rápido que o " + nameFirstVehicle)
 } else {
  alert(nameFirstVehicle + " e " + nameSecondVehicle + " possuem velocidades iguais")
 }
}

function calculoDano(){
  const attackerName = prompt("Nome do atacante")
  const attackPower = Number(prompt("Poder de ataque"))

  const defenderName = prompt("Nome do defensor")
  let lifePoints = Number(prompt("Pontos de vida do defensor"))
  const defensePower = Number(prompt("Poder de defesa"))
  const hasShield = confirm("Possui escudo") === true ? "Sim" : "Não"

  let causedDamage = 0

  if (attackPower > defensePower && hasShield === "Não") {
    causedDamage = attackPower - defensePower
  } else if (attackPower > defensePower && hasShield === "Sim") {
    causedDamage = (attackPower - defensePower) / 2
  }

  lifePoints -= causedDamage

  alert(attackerName + " causo " + causedDamage + " de dano em " + defenderName)
  alert(
    attackPower + "\nPoder de ataque: " + attackPower + "\n\n" +
    defenderName + "\nPontos de vida: " + lifePoints +
    "\nPoder de defesa: " + defensePower + "\nPossui escudo: " + hasShield
  )
}

function conversorMedidas(){
  const value = Number(prompt("Informe o valor em metros"))
  let option = prompt(
    "Escolha uma opção: " +
    "\n1. milímetro (mm)" +
    "\n2. centímetro (cm)" +
    "\n3. decímetro (dm)" +
    "\n4. decâmetro (dam)" +
    "\n5. hectômetro (hm)" +
    "\n6. quilômetro (km)"
  )

  switch (option) {
    case "1":
      alert("Resultado: " + value + "m = " + value * 1000 + "mm")
    break
    case "2":
      alert("Resultado: " + value + "m = "  + value * 100 + "cm")
    break
    case "3":
      alert("Resultado: " + value + "m = "  + value * 10 + "dm")
    break
    case "4":
      alert("Resultado: " + value + "m = "  + value / 10 + "dam")
    break
    case "5":
      alert("Resultado: " + value + "m = "  + value / 100 + "hm")
    break
    case "6":
      alert("Resultado: " + value + "m = "  + value / 1000 + "km")
    break
    default:
      alert("Opção inválida")
  }
}

function visitandoCidades(){
  const touristName = prompt("Nome do turista")
  let visitedCities = confirm("Visitou alguma cidade?")
  let citiesName = ""
  let amountCities = 0

  while (visitedCities === true) {
    citiesName += prompt("Nome da cidade")
    amountCities++

    visitedCities = confirm("Visitou alguma outra cidade?")
    if (visitedCities === true) {
      citiesName += ", "
    } else {
      citiesName += "."
    }
  }
  
  alert(
    touristName + " visitou " + amountCities + " cidades." +
    "\nNome das cidades: " + citiesName
  )
}

function menuInterativo(){
  let option = ""

  do {
    option = prompt(
      "Escolha uma opção:" +
      "\n1. Opção A" +
      "\n2. Opção B" +
      "\n3. Opção C" +
      "\n4. Opção D" +
      "\n5. Encerrar"
    )

    switch (option) {
      case "1":
        alert("Opção escolhida: A")
      break
      case "2":
        alert("Opção escolhida: B")
      break
      case "3":
        alert("Opção escolhida: C")
      break
      case "4":
        alert("Opção escolhida: D")
      break
      case "5":
        alert("O sistema será encerrado")
      break
      default:
        alert("Opção inválida")
   }
  } while (option !== "5")
}

// const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
// console.log(array)

// //Adicionar elementos no final do array
// //push
// let tamanho = array.push("Boromir")
// console.log(array)
// console.log(tamanho)

// //Adicionar elementos no início do array
// //unshift
// tamanho = array.unshift("Teste")
// console.log(array)
// console.log(tamanho)

// //Remover elementos do final do array
// let elementoRemovido = array.pop()
// console.log(array)
// console.log(elementoRemovido)

// //Remover primeiro elemento
// //shift
// elementoRemovido = array.shift()
// console.log(array)
// console.log(elementoRemovido)

// //Pesquisar por um elemento
// //includes
// const inclui = array.includes("Gandalf")
// console.log(inclui)

// //Pesquisar por um índice
// //indexOf
// const indice = array.indexOf("Gandalf")
// console.log(indice)

// //Cortar array
// //slice
// const hobbits = array.slice(0, 4)
// const outros = array.slice(-4)
// console.log(hobbits)
// console.log(outros)

// //Concatenar
// //concat
// const sociedade = hobbits.concat(outros, "Boromir")
// console.log(sociedade )

// //Substituição de elementos
// //splice
// const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
// console.log(sociedade)
// console.log(elementosRemovidos)

// //Iterar sobre os elementos
// for (let indice = 0; indice < sociedade.length; indice++) {
//   const elemento = sociedade[indice]
//   console.log(elemento + " se encontra na posição " + indice)
// }

// const arr = [
//   "1º Nível",
//   ["2º Nível", 42, true],
//   [
//     ["3º Nível, 1º item", "Olá mundo!"]
//     ["3º Nível, 2º item", "Oi mundo!"]
//   ],
//   []
// ]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[3][0])

function controleFinanceiro(){
  let money = Number(prompt("Informe o saldo atual (R$)?"))
  let option = ""

  do {
    option = prompt("Saldo altual: " + money + " R$" +
      "\nOpções:" +
      "\n1. Adicionar dinheiro" +
      "\n2. Remover" +
      "\n3. Sair"
    )

    switch (option) {
      case "1":
        money += Number(prompt("Valor a ser adicionado"))
        alert("Valor adicionado com sucesso")
      break
      case "2":
        money -=Number(prompt("Valor a ser removido"))       
        alert("Valor retirado com sucesso")
      break
      case "3":
        alert("Finalizando o sistema")
      break
      default:
        alert("Opção inválida")
    }
  } while (option !== "3")
}

function roboTabuada(){
  const value = Number(prompt("Valor a ser multiplicado"))
  let resultMultiplication = ""

  for (let i = 1; i <= 20; i++) {
    resultMultiplication += value + " * " + i + " = " + value * i + "\n"
  }
  alert("Resultado: \n" + resultMultiplication)
}

function palindromos(){
  const word = prompt("Informe a palavra")
  let reverseWord = ""

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
  }

  if (reverseWord.toLowerCase() === word.toLowerCase()) {
    alert(word + " é um palíndromo")
  } else {
    alert(word + " nâo é um palíndromo")
  }
}

function filaEspera(){
  let fila = []
  let opcao = ""

  do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++){
      pacientes += (i + 1) + "º " + fila[i] + "\n"
    }

    opcao = prompt(
      "Pacientes:\n" + pacientes +
      "\nOpções:"+
      "\n1. Novo paciente" +
      "\n2. Consultar paciente" +
      "\n3. Sair"
    )

    switch (opcao) {
      case "1":
        const novoPaciente = prompt("Nome do paciente")
        fila.push(novoPaciente)
        alert("Paciente adicionado com sucesso")
        break
      case "2":
        const pacienteConsultado = fila.shift()
        if (pacienteConsultado === undefined) {
          alert("Não há pacientes na fila")
        } else {
          alert(pacienteConsultado + " foi para a consulta")
        }
        break
      case "3":
        alert("Encerrando")
        break
      default:
        alert("Opção inválida")
    }
    
  } while (opcao !== "3")
}

function pilhaCartas(){
  let baralho = []
  let opcao = ""

  do {
    opcao = prompt(
      "Cartas no baralho: " +  baralho.length +
      "\nOpções:" +
      "\n1. Adicionar uma carta" +
      "\n2. Puxar uma carta" +
      "\n3. Sair"
    )

    switch (opcao) {
      case "1":
        const novaCarta = prompt("Carta a ser adicionada")
        baralho.push(novaCarta)
        alert("Carta adicionada com sucesso")
        break
      case "2":
        const cartaRetirada = baralho.pop()
        if (cartaRetirada === undefined) {
          alert("Não há cartas no baralho")
        } else {
          alert("Você puxou um " + cartaRetirada)
        }
        break
      case "3":
        alert("Encerrando")
        break
      default:
        alert("Opção inválida")
    }
  } while (opcao !== "3")  
}

function cadastroImoveis(){
  let option = ""
  let imoveis = []

  do {
    option = prompt("Imóveis cadastrados: " +
      "\nOpções: " +
      "\n1. Cadastrar imóvel" +
      "\n2. Mostrar imóveis cadastrados" +
      "\n3. Sair"
    )

    switch (option) {
      case "1":
        const imovel = {}
        imovel.proprietario = prompt("Nome do proprietário")
        imovel.qtdQuartos = Number(prompt("Quantidade de quartos"))
        imovel.qtdBanheiros = Number(prompt("Quantidade de banheiros"))
        imovel.possuiGaragem = (confirm("Possui garagem?")) === true ? "Sim" : "Não"
        imoveis.push(imovel)
        alert("Imóvel cadastrado com sucesso")
        break
      case "2":
        for (let i = 0; i < imoveis.length; i++) {
          alert("Imóvel " + ("0" + i + 1) +
            "\nProprietário: " + imoveis[i].proprietario +
            "\nQuantidade de quartos: " + imoveis[i].qtdQuartos +
            "\nQuantidade de banheiros: " + imoveis[i].qtdBanheiros +
            "\nPossui garagem: " + imoveis[i].possuiGaragem
          )
        }
        break
      case "3":
        alert("Saindo do sistema")
        break 
      default:
        alert("Opção inválida")
    }
  } while (option !== "3")
}