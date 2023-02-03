//API com array


async function getPeople() {
    const response = await fetch('https://randomuser.me/api/?results=10')

    return response.json()
}
//
getPeople().then( data => console.log( data))