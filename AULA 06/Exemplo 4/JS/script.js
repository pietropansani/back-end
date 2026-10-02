// Ao pressionar as teclas "r", "g" ou "b", muda a cor de fundo da pagina para vermelho, verde ou azul, respectivamente.

document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
    } else if (e.key === "g"){
        document.body.style.backgroundColor = "green"
    } else {
        document.body.style.backgroundColor = "blue"
    }
})