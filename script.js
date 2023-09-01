const inputValue = document.getElementById('input-name');
const searchBtn = document.getElementById('search-button');
const containerCharacter = document.getElementById('container-character');
const imgCharacter = document.getElementById('img-character');

async function fetchF(value) {
    const result = await fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json());
    
    return result;
}

const filterData = (result) => {
    const divFilter = document.getElementsByClassName('filter');
    const filterArray = Array.from(divFilter);

    const filteredObject = {};

    filterArray.map((element) => {
        return document.getElementById(element.lastElementChild.id);
    }).map((element) => {
        if(element.checked) {
            console.log(element);
            filteredObject[element.name] = result[element.name];
        }
    })

    return filteredObject;
}



searchBtn.addEventListener('click', async () => {
    const result = await fetchF(inputValue.value);

    imgCharacter.setAttribute('src', result.image);

    //containerCharacter.innerText = JSON.stringify(result, undefined, 1); //mostra todas as propriedades do objeto sem filtro 
    containerCharacter.innerText = JSON.stringify(filterData(result), undefined, 1);
})





