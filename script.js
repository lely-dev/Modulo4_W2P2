

function loadData(search) {
    fetch("https://striveschool-api.herokuapp.com/books?q="+search)
    .then((response) => response.json())
    .then((json) => {
        searchData = json;
        printResult(json)

    }) 
    .catch((err) => console.log("Error detected: ", err) );
}


let imputBooks = document.getElementById("imput_search");

function printResult(json){
    // booksPage = "";
    let searchResult = [...json];
    let booksPage = document.getElementById("books_container");
    
    
   
    searchResult.forEach(element => {
        let titleBook = element.title;
        let bookImg = element.img;
        booksPage.innerHTML += '<div class="card col-md-3"><img src="'+bookImg+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">"'+titleBook+'"</h5><a href="#" class="btn btn-primary" onclick="addCart()">Add to cart</a></div></div>'
        // console.log(titleBook);
    });

    
}


let btnSearchBook = document.getElementById("btn_search");

btnSearchBook.addEventListener("click", () => {
    loadData(imputBooks.value);
})

let shoppingCart = document.getElementById("cart_list");

function addCart(){
    let cartTitle = [...searchResult];
    let cartLi = document.createElement("li");
    cartLi.innerHTML = cartTitle.title;
    shoppingCart.appendChild(cartLi);
}





loadData("luna");