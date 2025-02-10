var nota1 = 8
var nota2 = 7
var nota3 = 2
var media = (nota1 + nota2 + nota3) / 3
console.log(media)

if (media >= 7) {
    console.log('Nota 1:' + nota1)
    console.log('Nota 2:' + nota2)
    console.log('Nota 3:' + nota3)
    console.log(' aluno(a) Aprovado =)' )
} else {
    console.log('Nota 1:' + nota1)
    console.log('Nota 2:' + nota2)  
    console.log('Nota 3:' + nota3)  
    console.log('aluno(a) Reprovado =(')
}

maior = nota1 
var menor = nota1
if (nota1 > maior) {
    maior = nota1
}
if (nota2 > maior) {
    maior = nota2
}
if (nota3 > maior) {
    maior = nota3
}
console.log('Sua maior nota foi: ' + maior)

menor = 10
if (nota1 < menor) {
    menor = nota1
}
if (nota2 < menor) {
    menor = nota2
}
if (nota3 < menor) {
    menor = nota3
}
console.log('sua menor nota foi:' + menor)

   