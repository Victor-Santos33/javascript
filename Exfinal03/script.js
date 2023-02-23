function contar(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')
    let num = []
    // if(ini.value == '' || fim.value == '' || pas.value == ''){
    //     res.innerHTML = 'Impossível contar!'
    // }else if(pas.value == 0){
    //     window.alert('Passo Inválido! Considerando PASSO 1')
    // }else{
    //     for(let i=ini.value; i<fim.value; i++){
    //        if(i%pas.value==0){
    //         num.push(i)
    //         res.innerHTML = `Contando: ${num}`
    //        }           
    //     }        
    // }
    if(ini.value == '' || fim.value == '' || pas.value == ''){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p<0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p=1
        }
        if(i <f){
            //Contagem crescente
            for(let c = i; c <=f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //Contagem regressiva
            for(let c=i; c >=f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}