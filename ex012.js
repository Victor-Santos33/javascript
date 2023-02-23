let agora = new Date
let hora = agora.getHours()
console.log(`Now is ${hora} hours`)
if(hora < 12){
    console.log('Good Morning')
}else if(hora <18){
    console.log('Good afternoon')
}else if(hora < 24){
    console.log('Good Night')
}else{
    console.log('This hours is wrong, set a valid hours')
}