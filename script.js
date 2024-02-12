

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
        titleBook = element.title;
        let bookImg = element.img;
        booksPage.innerHTML += '<div class="card col-md-3"><img src="'+bookImg+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">"'+titleBook+'"</h5><button></button><a href="#" class="btn btn-primary cart-shopping">Add to cart</a></div></div>'
        // console.log(titleBook);
        
    });

    
}

// let btnCart = document.getElementsByClassName("cart-shopping");

// // console.log(btnCart);
// btnCart.addEventListener("click", () => {
//     addCart();
// })


let btnSearchBook = document.getElementById("btn_search");

btnSearchBook.addEventListener("click", () => {
    loadData(imputBooks.value);
})

// loadData("luna");

let cartListSelected = document.getElementById("cart_list");

function addCart(){

    let bookSelected = document.createElement("li");
    bookSelected.innerHTML = titleBook;
    // cartListSelected.appendChild(bookSelected);
    console.log(bookSelected);


}





