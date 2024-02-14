

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

    let bookDescription = document.createElement("p");
    bookDescription.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    let bookCategory = document.createElement("p");
    bookCategory.innerHTML = category;

    let bookPrice = document.createElement("p");
    bookPrice.innerHTML = price;

    bookDetails.appendChild(imgElement);
    allDetails.appendChild(bookTitle);
    allDetails.appendChild(bookDescription);
    allDetails.appendChild(bookCategory);
    allDetails.appendChild(bookPrice);
    bookDetails.appendChild(allDetails);
}
