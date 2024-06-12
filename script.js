async function getQuote(){
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    quote.classList.remove("fadeQuote");
    author.classList.remove("fadeAuth");
    try{
        const response = await fetch(`https://api.quotable.io/random`);
        
        if (!response.ok){
            throw new Error("Quote Not Found!");
        }
        const data = await response.json();
        quote.textContent = `"${data.content}"`;
        author.textContent = `-${data.author}`;
        quote.classList.add("fadeQuote");
        author.classList.add("fadeAuth");
    }

    catch (error){
        console.error(error);
    }
}

async function tweet(){

}