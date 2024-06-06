// let frase = ''

// fetch('https://api.quotable.io/random')
//   .then(response => response.json())
//   .then(data => {
//     console.log(`${data.content} —${data.author} —${data.tags}`)
//     frase = `${data.content}`
//   })
//   .catch(error => {
//     console.log(error)
//   })

//   console.log(frase);

let quote = document.getElementById('quote');
let author = document.getElementById('author');
let bntNewQuote = document.getElementById('new-quote');
let frase = '';
let autor = '';
let tags = '';

async function fetchQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    frase = `${data.content}`;
    autor = `${data.author}`;
    tags = `${data.tags}`;
    
    return { frase, autor, tags };
  } catch (error) {
    console.log(error);
  }
}

async function displayQuote() {
  await fetchQuote();
  console.log("frase: "+frase,"\nautor: "+ autor,"\netiquetas: "+ tags); // Esto se ejecutará después de que fetchQuote se complete
    quote.innerHTML = '"'+frase+'"';
    author.innerHTML = autor;
}


bntNewQuote.addEventListener('click', displayQuote);
// displayQuote();