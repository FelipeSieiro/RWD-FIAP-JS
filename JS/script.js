const fullName = 'Felipe Sieiro'
const amount = 1200.55
const valid = true 
const list = ['melancia', 'banana', 'melão' , 'abacaxi']

//objeto
const obj = {
    name : 'Felipe Sieiro',
    fullValue : 1200.55,
    status: true,
 // chave : valor
} 

if (1000 === '1000') {
    console.log('Deu Bom')
} else{
    console.log('Deu Ruim')
}

if({} === {}){
    console.log('Objeto: Deu bom')
} else{
    console.log('Objeto: Deu Ruim')
}

//estrutura de repetição 
    //inicio          //condição          //incremento
// for (let index = 0; index < list.length; index++) {
//     console.log(list[index]) 
// }
// console.log("---------------------------------------------------------------")
// let count = 0
// while (count < 4) {
//     console.log(list[count])
//     count++
// }

list.map((listaDeFruta) => {
    console.log(listaDeFruta)
})

//Função
function soma(num1 , num2) {
    console.log(num1 + num2)
}

soma(10, 40)

//Arrow Function

const soma2 = (num1, num2) => console.log (num1+num2)
soma2(40, 40)