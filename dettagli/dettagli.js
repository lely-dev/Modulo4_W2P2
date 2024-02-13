

const bookendpoint = "https://striveschool-api.herokuapp.com/books/";

let bookResult;

if (window.location.search){

    const  activeParams = window.location.search;
    console.log(activeParams);
    const params = new URLSearchParams (activeParams);
    console.log(params);
    const id = params.get("q");
    console.log(id);

    fetch(`${bookendpoint}${id}`)
    .then((response) => response.json())
    .then((json) => {
        // bookResult = [...json];
        printBook(json);
    }) 
    .catch((err) => console.log("Error detected: ", err) );


}

let bookDetails = document.getElementById("book_details");

function printBook({img, price, category, title}){
    
    let imgElement = document.createElement("img");
    imgElement.src = img;
    imgElement.classList.add("img-fluid", "col", "img_setup")

    let allDetails = document.createElement("div");
    allDetails.classList.add("col")
    
    let bookTitle = document.createElement("h2");
    bookTitle.innerHTML = title;

    let bookCategory = document.createElement("p");
    bookCategory.innerHTML = category;

    let bookPrice = document.createElement("p");
    bookPrice.innerHTML = price;

    bookDetails.appendChild(imgElement);
    allDetails.appendChild(bookTitle);
    allDetails.appendChild(bookCategory);
    allDetails.appendChild(bookPrice);
    bookDetails.appendChild(allDetails);
}
