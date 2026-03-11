const api = {
    async buscarInformacoesPets(){
        try{
            const resposta = await fetch('http://localhost:3000/pets')
            return await resposta.json()
        }catch(error){
            alert('Erro ao buscar dados')
            throw error
        }
    },

    async salvarPet(pet) {
        try {
            const response = await fetch('http://localhost:3000/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pet),
            });
            return await response.json();
        } catch (error) {
            alert(`Erro: ${error.message}`);
            throw error;
        }
    },

    async buscarPetPorId(id){
        try{
            const resposta = await fetch(`http://localhost:3000/pets/${id}`)
            return await resposta.json()
        }catch(error){
            console.log(error)
            alert('Error ao buscar o pet por Id')
            throw error
        }
    },


    async editarPet(pet){
        try{
            const reposta = await fetch(`http://localhost:3000/pets/${pet.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pet)
            })
            return await reposta.json()
        }catch(error){
            alert(`Erro: ${error.message}`)
            throw error
        }
    }
}

export default api