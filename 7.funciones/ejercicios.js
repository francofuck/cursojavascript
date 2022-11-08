//function contarvocales(texto){return cantidadvocales}

//contarvocales('eucalipto')//5

function contarvocales(texto){
    const vocales = 'aeiou'
    let cantidadvocales = 0
    for(const letra of texto){
        if(vocales.includes(letra.tolowerCase)){
            cantidadvocales++;
        }
    }
    return cantidadvocales
}
contarvocales()

//function calculadora(num1,num2,operacion)(return total)
function resta(a, b){
    return a - b;
}
const resultado = resta(45, 12)
    console.log(resultado)

//calculadora(45,12,'resta')//33