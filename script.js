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
            filteredObject[element.name] = result[element.name];
        }
    })

    if(Object.keys(filteredObject).length === 0) {
        return result;
    } else {
        return filteredObject;
    }
}

searchBtn.addEventListener('click', async () => {
    const result = await fetchF(inputValue.value);

    imgCharacter.setAttribute('src', result.image);

    containerCharacter.innerText = JSON.stringify(filterData(result), undefined, 1);
})





