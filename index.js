const { select, number } = require('@inquirer/prompts')

const adicao = async () => {
    let res = 0
    const n1 = await number ({ message: "Digite o primeiro número: "})
    const n2 = await number ({ message: "Digite o segundo número: "})
    res = n1 + n2

    mensagem = "O resultado de " + n1 + "+" + n2 + " é: " + res
    return
}

const subtracao = async () => {
    let res = 0
    const n1 = await number ({ message: "Digite o primeiro número: "})
    const n2 = await number ({ message: "Digite o segundo número: "})
    res = n1 - n2

    mensagem = "O resultado de " + n1 + "-" + n2 + " é: " + res
    return
}

const divisao = async () => {
    let res = 0
    const n1 = await number ({ message: "Digite o primeiro número: "})
    const n2 = await number ({ message: "Digite o segundo número: "})
    res = n1 / n2

    mensagem = "O resultado de " + n1 + " dividido por " + n2 + " é: " + res
    return
}

const multiplicacao = async () => {
    let res = 0
    const n1 = await number ({ message: "Digite o primeiro número: "})
    const n2 = await number ({ message: "Digite o segundo número: "})
    res = n1 * n2

    mensagem = "O resultado de " + n1 + "x" + n2 + " é: " + res
    return
}

const porcentagem = async () => {
    let res = 0
    const n1 = await number ({ message: "Digite o primeiro número: "})
    const porc = await number ({ message: "Digite a porcentagem do primeiro numero: "})
    n2 = porc / 100
    res = n1 * n2

    mensagem = porc + "%" + " de " + n1 + " é: " + res
    return
}

const potenciacao = async () => {
    let res = 0
    const n1 = await number ({ message: "Digite o primeiro número: "})
    let pot = await number ({ message: "Digite a potencia do primeiro numero: "})
    n2 = pot
    res = n1
    while (pot != 1) {
        res = res * n1 
        pot--
    }

    mensagem = n1 + " elevado a "  + n2 + " é: " + res
    return
}

const mostrarMensagem = () => {
    console.clear()
    if (mensagem != "")
        console.log(mensagem)
        console.log("")
        mensagem = ""
}

mensagem = "Bem vindo à calculadora! Selecione uma das operações para começar:"

const start = async () => {
    while(true) {
        mostrarMensagem()
        const option = await select({
            message: ">",  /* O select aguarda um obj com exatamente esses props */
            choices: [
                {
                    name: "Adição",
                    value: "adc"
                },
                {
                    name: "Subtração",
                    value: "sub"
                },
                {
                    name: "Divisão",
                    value: "div"
                },
                {
                    name: "Multiplicação",
                    value: "mult"
                },
                {
                    name: "Porcentagem",
                    value: "porc"
                },
                {
                    name: "Potenciação",
                    value: "pot"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ],
        }) /* await = aguardar, sempre q usarmos await, temos q ter async no const da função */
        /* Aqui usamos o await para que o programa espere o usuario escolher uma opção, inves de ficar rodando igual louco */

        switch(option) {
            case "adc":
                await adicao()
                break
            case "sub":
                await subtracao()
                break
            case "div":
                await divisao()
                break
            case "mult":
                await multiplicacao()
                break
            case "porc":
                await porcentagem()
                break
            case "pot":
                await potenciacao()
                break
            case "sair":
                console.log("Até a proxima!")
                return
        }
    }
}

start()  