const { select, number } = require('@inquirer/prompts')

const mostrarMensagem = () => {
    console.clear
    if (mensagem != "")
        console.log(mensagem)
        console.log("")
        mensagem = ""
}

mensagem = "Bem vindo à calculadora! Selecione uma das operações para começar:"

const start = async () => {
    mostrarMensagem()
    while(true) {
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
            case "sair":
                console.log("Até a proxima!")
                return
        }
    }
}

start()  