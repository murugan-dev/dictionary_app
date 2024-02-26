const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const search = document.querySelector("input");
const content = document.querySelector(".content");
const result = document.querySelector(".after-searching");
const errorText = document.querySelector(".error-text");

content.classList.add("instruct")
search.addEventListener("keyup", e=>{
    let word = e.target.value;

    if(e.key == "Enter" && word){
        fetchApi(word)
    }
})
function fetchApi(word){
    try{
     
    
    fetch(`${url}${word}`)
    .then(res => res.json())
    .then(data =>{ 
        console.log(data)
    result.innerHTML = 
    `<div class="word">
       <div class="details">
          <p class="con-heading">Word : <span>${word}</span></p>
          <span class="con-span word-span">
          <pre>${data[0].meanings[0].partOfSpeech}  /${data[0].phonetic}/</pre>
          </span>                       
        </div>
    </div>
    <hr>
   <div class="meaning">
        <div class="details">
            <p class="con-heading">Meaning : </p>
            <span class="con-span">${data[0].meanings[0].definitions[0].definition}</span>                
        </div>
   </div>
   <hr>
   <div class="synonyms">
        <div class="details">
            <p class="con-heading">Synonyms : </p>
            <span class="con-span">${data[0].meanings[0].synonyms[0] || "Sorry couldn't found Synonyms of the word"}</span>                
        </div>
   </div>
   <hr>
   <div class="word-example">
        <div class="details">
            <p class="con-heading">Word Example : </p>
            <span class="con-span">${data[0].meanings[0].definitions[0].example || "Sorry couldn't found Example of the word" }</span>                
        </div>
   </div>
   `;

    })
 }
 catch{
  errorText.innerHTML = `Unable to find the meaning of the word ${word}. please search the another word`;
     }
}
