let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let val = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l ) {  
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && ! inLista(num.value, val)){
        val.push(Number(num.value))
        let item = document.createElement ('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (val.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let soma = 0 
        let media = 0
        let maior = val[0]
        let menor = val[0]
        let tot = val.length
        for(let pos in val){
            soma += val[pos]
            if (val[pos] > maior)
                maior = val[pos]
            if (val[pos]< menor)
                menor = val[pos]
        }

        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`
    }
}