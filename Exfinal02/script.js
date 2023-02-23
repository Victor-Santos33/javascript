function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')
    if( fAno.value == 0 || fAno.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        let fSex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <3){
                //Bebê
                img.setAttribute('src', 'bebe-M.png')
            }else if(idade < 14){
                //Criança
                img.setAttribute('src', 'crianca-M.png')
            }else if (idade <21){
                //Jovem
                img.setAttribute('src', 'jovem-M.png')
            }else if (idade<50){
                //Adulto
                img.setAttribute('src', 'adulto-M.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-M.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >=0 && idade <3){
                //Bebê
                img.setAttribute('src', 'bebe-F.png')
            }else if(idade < 14){
                //Criança
                img.setAttribute('src', 'crianca-F.png')
            }else if (idade <21){
                //Jovem
                img.setAttribute('src', 'jovem-F2.png')
            }else if (idade<50){
                //Adulto
                img.setAttribute('src', 'adulto-F.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosa-F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}