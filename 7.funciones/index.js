//arrow function o funciones flecha

//pasos para construir una function
//1.palabra reservada function
//2.ponerle un nombre que describa el trabajo que realizara la funcion
//3.La funcion puede resivir parametros pero si o si indicar que tendra parametros
//()
//(lista de amigos)
//(edad, nombres)
//4.Dato importante. una funcion siempre tiene que retornar un tipo de dato

function saludo(nombre, apellido){
    let saludo = 'hola como estas ' + nombre + ' ' + apellido
    return saludo
}

//para usar una funcion debo llamar a la funcion
console.log(saludo('Arnold','Mamani'))
