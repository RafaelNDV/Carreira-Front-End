import * as z from "zod"


const capitalizeFirst = (s) => s.trim().length === 0 ? s : s.trim()[0].toUpperCase() + s.trim().slice(1);


const user = {
    nome: 'rafael',
    idade: '22',
    email: 'rafaelnestor01@gmail.com',
    senha: '123456',
    confirmsenha: '123456',
}

const eventSchema = z.object({
    nome: z.string().trim().min(1, 'Nome é obrigatório').transform(capitalizeFirst),
    idade: z.coerce.number().gte(18),
    email: z.string().email().toLowerCase(),
    senha: z.string().min(6),
    confirmsenha: z.string().min(6),
}).refine(({senha, confirmsenha}) => senha === confirmsenha,{
    error: 'Senhas não deram match',
    path: ['confirmsenha']
})

const result = eventSchema.safeParse(user)

if(result.success){
    console.log(result)
}else{
    console.log(result.error.message)
}
