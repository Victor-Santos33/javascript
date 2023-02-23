// let num = [22,27,33]
// num[3] = 6
// console.log(`Nosso vetor é o ${num}`)

let num = [27,33,22,14,31]
num.push(1)            /** adicionando o número dentro do parênteses ao último índice do array */
num.sort()             /** Colocando em ordem alfabética */
// console.log(`Este é o seu vetor ${num}`)

// for(i = 0; i<num.length; i++){
//     console.log(`A posição ${i}, tem o valor ${num[i]}`)
// }

for (const i in num) {
    console.log(`A posição ${i}, tem o valor ${num[i]}`)
}
var where = num.indexOf(3)

if(where == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 33 está na posição ${where}`)
}