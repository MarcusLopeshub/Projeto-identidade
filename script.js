function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 18) {
                // Criança
                img.setAttribute('src', 'NeneM.jpg')
            } else if (idade <50) {
                //Homem
                img.setAttribute('src', 'Homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'Senhor.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 18) {
                // Criança
                img.setAttribute('src', 'NeneF.jpg')
            } else if (idade <50) {
                //Mulher
                img.setAttribute('src', 'Mulher.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'Senhora.jpg')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
