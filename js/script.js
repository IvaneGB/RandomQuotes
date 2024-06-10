import callApi from "./api.js";

console.log(callApi);

let quote = document.getElementById('quote');
let author = document.getElementById('author');
let etiquetas = document.getElementById('tags');
let bntNewQuote = document.getElementById('new-quote');
let btnCopyQuote = document.getElementById('copy-quote');
let frase = '';
let autor = '';
let tags = [];

// async function fetchQuote() {
//     try {
//         const response = await fetch('https://api.quotable.io/random');
//         const data = await response.json();
//         frase = `${data.content}`;
//         autor = `${data.author}`;
//         // tags = `${data.tags}`;
//         tags = data.tags;

//         return { frase, autor, tags };
//     } catch (error) {
//         console.log(error);
//     }
// }

// dame la función para usar callApi y usar los datos .content,.author y .tags

async function fetchQuote() {
  try {
    const response = await callApi.getQuotes();
    frase = `${response.content}`;
    autor = `${response.author}`;
    // tags = `${data.tags}`;
    tags = response.tags;
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
    
}

displayQuote();
bntNewQuote.addEventListener('click', displayQuote);

// boton copiar al portapapeles

btnCopyQuote.addEventListener('click', copyQuoteToClipboard);


// Función para copiar la cita al portapapeles
function copyQuoteToClipboard() {
  // Selecciona la frase
  let quoteText = document.getElementById('quote').innerText;

  // Intenta copiar el texto al portapapeles
  navigator.clipboard.writeText(quoteText)
    .then(() => {
      // Éxito: el texto se copió al portapapeles
      console.log('Cita copiada al portapapeles:', quoteText);
      // Aquí podrías mostrar un mensaje de éxito al usuario si lo deseas
    })
    .catch(err => {
      // Error: no se pudo copiar el texto al portapapeles
      console.error('Error al copiar la cita al portapapeles:', err);
      // Aquí podrías mostrar un mensaje de error al usuario si lo deseas
    });
}