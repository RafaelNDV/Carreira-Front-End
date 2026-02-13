const nome = 'Rafael'

if (nome){
    console.log('Olá, ', nome)
}else{
    console.log('Ainda não sei o seu nome')
}

const idade = null

if( idade != null && idade >= 18){
    console.log('Maior de idade')
}else if(idade != null && idade >= 0 && idade < 18){
    console.log('Menor de idade')
}