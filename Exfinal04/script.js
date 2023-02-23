function gerar(){
    let numb = document.getElementById('txtnumb')
    let res = document.getElementById('res')
    let n = Number(numb.value)
    if(n == ''){
        window.alert('Por favor digite um número')
    }else{
        res.innerHTML=''
        for( i = 0; i <= 10; i++){
            res.innerHTML += `<option value="v${i}">${n} x ${i} = ${n*i}</option> </br>`
        }
    }
}