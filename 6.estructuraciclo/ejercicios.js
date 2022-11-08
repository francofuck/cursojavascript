//con la estructura de ciclo for
//mostrar los numeros pares entre 1 y 20
for(let i=1;i<=20;i++){
    if(i % 2 == 0){
        console.log(i)
    }
    else{
        console.log(i)
    }
}
let vocales = "aeiou";
for(let i=0; i<vocales.length; i++){
    console.log(vocales[i])
}

let texto = 'alabala el alta de la mar'
let contador = 0
for(let i = 0; i < texto.length; i++){
    if(texto[i]=='a'){
        contador++
    }
}
console.log('tienes', contador, 'vocales')

let text = 'tenemos'
let contar = 0
for(let i = 0; i < text.length; i++){
    if(text[i]== 'a'){
        contar++
    } 
    if(text[i]=='e'){
        contar++
    }
    if(text[i] == 'i'){
        contar++
    }
    if(text[i] == 'o'){
        contar++
    }
    if(text[i] == 'u'){ 
        contar++
    }
}
console.log('tienes', contar, 'vocales')

//hacer un programa que me muestre el factorial de un numero
//5!=5*4*3*2*1
let numero = 5
let total = 1
for(let i = 1; i <= (numero); i++){
    total = total * i
}
console.log(total)

//hacer un programa que me  determine si un texto es palimdromo
//ada = ada
function palimdromo(cadena){
let array = cadena.split("");
let reverse = array.reverse("");

return cadena == reverse.join("")? "si es palimdromo" : "no es palimdromo"
}
console.log(palimdromo("ada"))
console.log(palimdromo("alvarez"))

//hacer un programa que muestre los "n" numeros de la serie de fibonacci
let a = 0
let b = 1
let c = 0
for(let i = 0; i < 7; i++){
    console.log(a)
    c = a + b
    a = b
    b = c
} 

//1-2-3-5-8-13-21-34