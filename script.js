const inputValue = document.getElementById('input-name');
const searchBtn = document.getElementById('search-button');
const containerCharacter = document.getElementById('container-character');
const imgCharacter = document.getElementById('img-character');

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => (res.json()))
    .then((data) => {
        return data;
    })

    return result;
}

searchBtn.addEventListener('click', async () => {
    const result = await fetchApi(inputValue.value);
    containerCharacter.innerText = JSON.stringify(result, undefined, 1);

    imgCharacter.setAttribute('src', result.image);
})