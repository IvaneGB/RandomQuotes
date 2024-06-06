

let quote = document.getElementById('quote');
let author = document.getElementById('author');
let etiquetas = document.getElementById('tags');
let bntNewQuote = document.getElementById('new-quote');
let frase = '';
let autor = '';
let tags = [];

async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        frase = `${data.content}`;
        autor = `${data.author}`;
        // tags = `${data.tags}`;
        tags = data.tags;

        return { frase, autor, tags };
    } catch (error) {
        console.log(error);
    }
}

async function displayQuote() {
    await fetchQuote();
    quote.innerHTML = '"' + frase + '"';
    author.innerHTML = autor;

    // Limpiar el contenido anterior
    etiquetas.innerHTML = '';

    // Crear elementos <p> para cada tag y añadirlos al contenedor
    tags.forEach(tag => {
        const tagElement = document.createElement('p');
        tagElement.textContent = tag;
        etiquetas.appendChild(tagElement);
    });
    console.log(tags);
}


bntNewQuote.addEventListener('click', displayQuote);
