let num = document.getElementById('txtn')
let adc = document.getElementById('adc')
let res = document.getElementById('res')
let valores = []

//Função verificando se o número é entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

//Função verificando se o número já está na lista
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    let n = Number(num.value)
    if(isNumero(n) && !inLista(n, valores)){ //verificando as duas funções
        valores.push(Number(n)) //adicionando ao array o número adicionado a lista
        let item = document.createElement('option') //criando a tag
        item.text= `Valor ${n} adicionado.` //adcionando o texto com interpolação
        adc.appendChild(item) //adicionando o texto do option ao ID da lista
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //Limpando após adicionar o número
    num.focus() //fazendo o traço piscar
}

function finalizar(){
    if(valores == ''){
        window.alert('Lista vazia')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média valor informado foi ${media}.</p>`
    }
}