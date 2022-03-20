let padraoPipoca = 10
let padraoMacarrao = 8
let padraoCarne = 15
let padraoFeijao = 12
let padraoBrigadeiro = 8

let pipoca = 'pipoca'
let macarrao = 'macarrao'
let carne = 'carne'
let feijao = 'feijao'
let brigadeiro = 'brigadeiro'

let msg = 'Prato pronto, bom apetite!!!'

function microondas (alimento,tempo) { 

        // Tempo padrao de cada prato
    if((alimento == 'pipoca' && tempo == padraoPipoca)  ||
    (alimento == 'macarrao' && tempo == padraoMacarrao) ||
    (alimento == 'carne' && tempo == padraoCarne)       || 
    (alimento == 'feijao' && tempo == padraoFeijao)     || 
    (alimento == 'brigadeiro' && tempo == padraoBrigadeiro)) {
        return  `Você selecionou o tempo padrao do(a) ${alimento}. Tempo estimado é de ${tempo} segundos.\n${msg}`;
    }

        // Se selecionar o prato e colocar um valor entre o padrao ou menor que 2x o valor padrao!
     else if ((alimento == 'pipoca' && tempo > padraoPipoca && tempo < padraoPipoca*2) || 
     (alimento == 'macarrao' && tempo > padraoMacarrao && tempo < padraoMacarrao*2)    || 
     (alimento == 'carne' && tempo > padraoCarne && tempo < padraoCarne*2)             || 
     (alimento == 'feijao' && tempo > padraoFeijao && tempo < padraoFeijao*2)          || 
     (alimento == 'brigadeiro' && tempo > padraoBrigadeiro && tempo < padraoBrigadeiro*2)) {
        return `Você selecionou o(a) ${alimento} por ${tempo} segundos!\n${msg}`;
    }

        // Se selecionar o prato e colocar um valor maior ou igual a 2x o valor padrao e menor que 3x o valor padrao!
     else if((alimento == 'pipoca' && tempo >= padraoPipoca*2 && tempo < padraoPipoca*3) || (alimento == 'macarrao' && tempo >= padraoMacarrao*2 && tempo < padraoMacarrao*3) || (alimento == 'carne' && tempo >= padraoCarne*2 && tempo < padraoCarne*3) || (alimento == 'feijao' && tempo >= padraoFeijao*2 && tempo < padraoFeijao*3) || (alimento == 'brigadeiro' && tempo >= padraoBrigadeiro*2 && tempo < padraoBrigadeiro*3)) {
        return  `Você selecionou ${alimento} por ${tempo} segundos, por isso a ${alimento} queimou!`;
    }

        // Se selecionar o prato e colocar um valor menor que o padrao!
     else if ((alimento == 'pipoca' && tempo < padraoPipoca) || 
    (alimento == 'macarrao' && tempo < padraoMacarrao)       || 
    (alimento == 'carne' && tempo < padraoCarne)             || 
    (alimento == 'feijao' && tempo < padraoFeijao)           || 
    (alimento == 'brigadeiro' && tempo < padraoBrigadeiro))
    {
        return  `O tempo de ${tempo} segundos para o(a) ${alimento} é insuficiente!`;
    }

        // Se selecionar o prato e colocar um valor maior ou igual a 3x o valor padrao!
     else if ((alimento == 'pipoca' && tempo >= padraoPipoca*3)  || 
    (alimento == 'macarrao' && tempo >= padraoMacarrao*3)        || 
    (alimento == 'carne' && tempo >= padraoCarne*3)              || 
    (alimento == 'feijao' && tempo >= padraoFeijao*3)            || 
    (alimento == 'brigadeiro' && tempo >= padraoBrigadeiro*3)) {
        return `O(A) ${alimento} Explodiu!`;
    } 

        //Se o prato não estiver cadastrado!
    else {
        return  'Prato não existe!';
    }
}

console.log('-----Tempo Padrão-----')
console.log(microondas('pipoca', 10))

console.log('\n-----Tempo Insuficiente-----')
console.log(microondas('pipoca', 2))

console.log('\n-----Queimou-----')
console.log(microondas('pipoca', 20))

console.log('\n-----Kabum-----')
console.log(microondas('pipoca', 30))

console.log('\n-----Tempo entre padrao e 2x o padrao-----')
console.log(microondas('pipoca', 11))

console.log('\n-----Produto não cadastrado-----')
console.log(microondas('caldo', 11))




