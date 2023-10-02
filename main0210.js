
console.log('passei aqui');


function relogio(tempoAlarme) {
    return new Promise((result, reject) => {
        let segundos = 0
        let num = (Math.random() * 100) % 9
        console.log('num', num);
        setInterval(() => {
            segundos++
            if (segundos >= num) {
                reject('OPA! DEU PANE!')
            }
            if (segundos == tempoAlarme) {
                result('BEEP BEEP BEEP')
            }
        }, 1000)
    })
}

//relogio(5).then((resp) => {
//    console.log('resp', resp);
//    relogio(3).then((resp) => {
//        console.log('resp', resp);
//    }).catch((resp) => {
//        console.log('resp', resp);
//    })    
//}).catch((resp) => {
//    console.log('resp', resp);
//})


async function brincaComRelogios() {
    try {
        let resp = await relogio(5)
        console.log('resp', resp)    
        resp = await relogio(5)
        console.log('resp', resp)    
        resp = await relogio(5)
        console.log('resp', resp)    
    } catch {
        console.log('erro');
    }
}

brincaComRelogios()