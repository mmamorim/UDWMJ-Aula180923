console.log("passei aqui");

function printInTheBox(texto) {
    let linha = ""
    for(let i=0; i<texto.length; i++) {
        linha = linha + "-"
    }
    console.log("+"+linha+"+")
    console.log("|"+texto+"|")
    console.log("+"+linha+"+")    
}

function printInTheBoxAst(texto) {
    let linha = ""
    for(let i=0; i<texto.length+2; i++) {
        linha = linha + "*"
    }
    console.log("*"+linha+"*")
    console.log("* "+texto+" *")
    console.log("*"+linha+"*")    
}

export default printInTheBoxAst