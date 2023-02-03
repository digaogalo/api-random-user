//API com array


async function getPeople() {
    const response = await fetch('https://randomuser.me/api/?results=10')

    return response.json()
}

// filtrar somente mulheres 
getPeople().then( data => {
    const people = data.results
   // console.log(people.filter(p => p.gender === 'male' ))
})

//Trabalhando com dados 
// esses dados vão filtrar somente users com mais de 40 anos
getPeople().then( data => {
    const result = data.results.filter(p => p.dob.age >= 30)
    const people = []
    for (let p of result) {
        people.push({
            'Nome' :`${p.name.first} ${p.name.last}`,
            'Sexo' : p.gender ,
            'Idade' : p.dob.age
        })
    }

    console.table(people)
})