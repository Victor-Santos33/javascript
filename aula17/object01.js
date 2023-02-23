let amigo = {
    nome: 'Miguel',
    sexo: 'M',
    peso: 71,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

let amiga = {
    nome:'Helena',
    sexo: 'F',
    peso: 58,
    emagrecer(e = 0){
        console.log('Emagreceu')
        this.peso -=e
    }
}

amiga.emagrecer(3)
console.log(`${amiga.nome} emagreceu ${amiga.peso}Kg`)