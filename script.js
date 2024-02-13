
let searchResult;

function loadData(search) {
    fetch("https://striveschool-api.herokuapp.com/books?q="+search)
    .then((response) => response.json())
    .then((json) => {
        searchResult = [...json];
        printResult(searchResult)

    }) 
    .catch((err) => console.log("Error detected: ", err) );
}

// IMPUT DELLA RICERCA
const imputBooks = document.getElementById("imput_search");


// FUNZIONE PER CREARE ELEMENTI NEL DOM
function printResult(json){
    
    
    let booksPage = document.getElementById("books_container");
    
    booksPage.innerHTML = "";
   
    json.forEach(element => {

        
        let boxBook = document.createElement("div");
        boxBook.classList.add("col-md-3")
        let bookImg = document.createElement("img");
        bookImg.src = element.img;

        bookImg.classList.add("img-fluid")
        let titleBook = document.createElement("h5");
        titleBook.innerHTML = element.title;
        
        // BOTTONE CARRELLO
        let btnCart = document.createElement("button");
        btnCart.innerText = "Add Cart";
        
        // BOTTONE CANCELLA BOOK
        let btnDelete = document.createElement("button");
        btnDelete.innerText = "Remove Book";

        // BOTTONE CAMBIA PAGINA
        let btnDettagli = document.createElement("a");
        btnDettagli.innerText = "More Details";
        btnDettagli.href = `dettagli/dettagli.html?q=${element.asin}`;
       
        

        boxBook.appendChild(bookImg);
        boxBook.appendChild(titleBook);
        boxBook.appendChild(btnCart);
        boxBook.appendChild(btnDelete);
        boxBook.appendChild(btnDettagli);
        booksPage.appendChild(boxBook);

        btnCart.addEventListener("click", () => {
            addCart(element);
        })
        
    
    });
    

    
}

loadData("luna");


// BOTTONE RICERCA LIBRO E FUNZIONE
let btnSearchBook = document.getElementById("btn_search");

btnSearchBook.addEventListener("click", () => {
    const risultati = searchResult.filter((item) =>{
        if (item.title.includes(imputBooks.value)){
            return true
        } else {
            return false
        }
    })
    printResult(risultati);
})


// ELEMENTO E FUNZIONE PER AGGIUNGERE ELEMENTI AL CARRELLO
let cartListSelected = document.getElementById("cart_list");

function addCart(book){
    

    let bookSelected = document.createElement("li");
    bookSelected.innerHTML = book.title;
    cartListSelected.appendChild(bookSelected);



}





