

function loadData(search) {
    fetch("https://striveschool-api.herokuapp.com/books?q="+search)
    .then((response) => response.json())
    .then((json) => {
        printResult(json)

    }) 
    .catch((err) => console.log("Error detected: ", err) );
}


const imputBooks = document.getElementById("imput_search");
let titleBook;


function printResult(json){
    // booksPage = "";
    let searchResult = [...json];
    let booksPage = document.getElementById("books_container");
    
    
   
    searchResult.forEach(element => {

        
        let boxBook = document.createElement("div");
        boxBook.classList.add("col-md-3")
        let bookImg = document.createElement("img");
        bookImg.src = element.img;
        bookImg.classList.add("img-fluid")
        titleBook = document.createElement("h5");
        titleBook.innerHTML = element.title;
        
        let btnCart = document.createElement("button");
        btnCart.innerText = "Add Cart";
        // booksPage.innerHTML += '<div class="card col-md-3"><img src="'+bookImg+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">"'+titleBook+'"</h5><div>"'+btnCart+'"</div></div></div>'
        console.log(titleBook);

        boxBook.appendChild(bookImg);
        boxBook.appendChild(titleBook);
        boxBook.appendChild(btnCart);
        booksPage.appendChild(boxBook);

        btnCart.addEventListener("click", () => {
            addCart();
        })
        
    });

    
}




let btnSearchBook = document.getElementById("btn_search");

btnSearchBook.addEventListener("click", () => {
    loadData(imputBooks.value);
})

loadData("luna");

let cartListSelected = document.getElementById("cart_list");

function addCart(){
    

    let bookSelected = document.createElement("li");
    bookSelected.innerHTML = titleBook;
    // cartListSelected.appendChild(bookSelected);
    console.log(titleBook);


}





