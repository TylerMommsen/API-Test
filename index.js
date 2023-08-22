const img = document.querySelector('img');
const search = document.getElementById('search-input');
const form = document.getElementById('search-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchInput = search.value;
    loadGif(searchInput);
})

function loadGif(search) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=eij09x8kAsgVcnPBsuZ4Z7V0FgQunCSf&s=${search}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            if (response.data) {
                img.src = response.data.images.original.url;
            } else {
                loadGif('cats');
            }
        })
        .catch(function () {
            loadGif('cats');
        });
}

loadGif();