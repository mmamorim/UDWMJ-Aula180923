
const Pessoa = (nome, sobrenome, idade) => { 
    const obj = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    
        fazAniversario() {
            obj.idade++
        },
    
        imprime() {
            console.log(obj.nome+" "+obj.sobrenome+" idade: "+obj.idade);
        }
    }
    return obj
}

export default Pessoa