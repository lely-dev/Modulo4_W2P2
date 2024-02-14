
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

let booksPage;
// FUNZIONE PER CREARE ELEMENTI NEL DOM
function printResult(json){
    
    
    booksPage = document.getElementById("books_container");
    
    booksPage.innerHTML = "";
   
    json.forEach(element => {

        
        let boxBook = document.createElement("div");
        boxBook.classList.add("col-md-3", "g-5");

        let bookImg = document.createElement("img");
        bookImg.src = element.img;
        bookImg.classList.add("img-fluid")

        let titleBook = document.createElement("h5");
        titleBook.innerHTML = element.title;
        
        let divBottoni= document.createElement("div");
        // BOTTONE CARRELLO
        let btnCart = document.createElement("button");
        btnCart.innerText = "Add Cart";
        
        // BOTTONE CANCELLA BOOK
        let btnDelete = document.createElement("button");
        btnDelete.innerText = "Remove Book";

        // BOTTONE CAMBIA PAGINA
        let divDettagli= document.createElement("div");
        let btnDettagli = document.createElement("a");
        btnDettagli.innerText = "More Details";
        btnDettagli.href = `dettagli/dettagli.html?q=${element.asin}`;
       
        

        boxBook.appendChild(bookImg);
        boxBook.appendChild(titleBook);
        divBottoni.appendChild(btnCart);
        divBottoni.appendChild(btnDelete);
        boxBook.appendChild(divBottoni);
        divDettagli.appendChild(btnDettagli)
        boxBook.appendChild(divDettagli);
        booksPage.appendChild(boxBook);

        // CANCELLARE IL LIBRO
        btnDelete.addEventListener("click", () => {
            removeBook(boxBook);
        })

        // AGGIUNGERE AL CARRELLO
        btnCart.addEventListener("click", () => {
            addCart(element, boxBook);
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
let badgeNumber = document.getElementById("number_badge");
badgeNumber.classList.add("badge_hide");
let count = 0;


function addCart(book, elementHtml){
    
    elementHtml.classList.add("i_m_selected");

    let containerTitleX = document.createElement("div");
    containerTitleX.classList.add("cart_item");

    let bookSelected = document.createElement("li");
    bookSelected.innerHTML = book.title;
    bookSelected.id = book.asin;

    let removeBookFromCart = document.createElement("p");
    removeBookFromCart.innerHTML = "X";
    

    containerTitleX.appendChild(bookSelected);
    containerTitleX.appendChild(removeBookFromCart);
    cartListSelected.appendChild(containerTitleX);

    badgeNumber.classList.remove("badge_hide");
    count++;
    badgeNumber.innerHTML = count;
    
    

    removeBookFromCart.addEventListener("click", () => {
        delateTitle(containerTitleX, elementHtml, badgeNumber);
    })


}

// RIMUOVE IL LBRO DAL DOM
function removeBook(item){

    booksPage.removeChild(item);

}

// RIMUOVE IL LIBRO DAL CARRELLO E DESELEZIONA QUELLO SUL DOM
function delateTitle (cartTitle, domElement, badge){
    cartListSelected.removeChild(cartTitle);
    count--;
    badge.innerHTML=count;

    if ( count === 0){
        badgeNumber.classList.add("badge_hide");
    }

    domElement.classList.remove("i_m_selected");
}



