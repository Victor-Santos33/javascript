function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <12){
        //BOM DIA
        img.src = 'image/manha-pq.png'
        document.body.style.background = '#9BB6C7'
    }else if( hora >=12 && hora <18){
        //BOA TARDE
        img.src = 'image/tarde-pq.png'
        document.body.style.background = '#F8EEE5'
    }else{
        //BOA NOITE
        img.src = 'image/noite-pq.png'
        document.body.style.background = '#020202'
        document.body.style.color = 'silver'
    }

}