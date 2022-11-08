//function contarvocales(texto){return cantidadvocales}

//contarvocales('eucalipto')//5

const contarVocales = palabra => {
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales
}

const cadena = 'interesante el mundo que se encuentra en el universo'
const vocales = contarVocales(cadena)
console.log(vocales)

//function calculadora(num1,num2,operacion)(return total)
function sumar(a,b,operacion){
    
    if(operacion == 'suma'){
        total = a + b;
    }else if( operacion == 'resta'){
    total = a - b;
    }else if(operacion == 'multiplicacion'){
        total = a * b;
    }else if(operacion == 'divicion'){
        total = a /b ;
        
    }  
    return total
    
}
console.log(sumar(6,2,"resta"))

//calculadora(45,12,'resta')//33