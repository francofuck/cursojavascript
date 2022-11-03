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

//hacer un programa que me muestre el factorral de un numero
//5!=5*4*3*2*1

//hacer un programa que me  determine si un texto es palimdromo
//ada = ada

//hacer un programa que muestre los "n" numeros de la serie de fibonacci
//1-2-3-5-8-13-21-34