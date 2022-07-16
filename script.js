// Importing CSS in JS File
var link = document.createElement("link");
// set the attributes for link element
link.rel = "stylesheet";
link.type = "text/css";
link.href = "style.css";

// Get HTML head element to append
// link element to it
document.getElementsByTagName("HEAD")[0].appendChild(link);

document.querySelector("#myButton").addEventListener("click", meme);
function meme() {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((response) => response.json())
    .then((jokeData) => {
      const img = jokeData.url;
      const author = jokeData.author;
      const memeElement = document.querySelector("#jokeElement");
      // const img = document.createElement("img")
      memeElement.innerHTML = `<div>
                              <img src="${img}" class="meme_img"/>
                              <p class="author-text">Author:&nbsp${author}</p>
                              </div>`;
    })
    .catch((err) => console.error(err));
}
window.onload = meme;
