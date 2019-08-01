// Different functions in javascript:

// Anonymous functions
// arguments keyword in functions
// Rest Parameterers
// Spread Operators
// function constructor
// self calling Anonymous function
// function closure
// arrow function 
// function with default parameters
// Nested function
// Recursive function

// Destructuring

// .forEach(function() , map
// callback();




let bookLists = [];
// to create template literal
function displayBookInfo() {
    let li = document.querySelector("#book-list");

    let data = "";
    bookLists.forEach(item => {
        data += `
        
        <tr>
            <td>${item["title"]}</td>
            <td>${item["author"]}</td>
            <td>${item["isbn"]}</td>
            <td>${item["price"]}</td>
            <td>
                 <a href="#" class="btn btn-danger" onclick="removeItems(${item["id"]})">X</a>          
            </td>
        </tr>      
        `;
    });
    console.log(data);

    li.innerHTML = data;
};

//to insert data into that array and display in UI
document.getElementById("addBook").onclick = function () {
    bookLists.push({
        id: Math.random(),
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        isbn: document.getElementById("isbn").value,
        price: document.getElementById("price").value,
    });
    var form = document.getElementById("book-form");
    form.reset();
    displayBookInfo();
};

document.getElementById("btn").onclick = function () {
    // let amt = document.getElementById("price").value;
    // console.log("hello" + amt);

    // let x = 0;
    // for (var i = 0; i < amt.length; i++) {
    //     if (parseInt(amt[i].value)) {
    //         x += parseInt(amt[i].value);
    //     }

    let x = 0;
    for (var item of bookLists) {
        x += parseInt(item.price);
    }
    document.getElementById("total").value = x;
    console.log("hello" + x);
}

//to delete a specific data
function removeItems(id) {
    let rData = bookLists.filter(item => item.id != id);
    bookLists = rData;
    displayBookInfo();
    //console.log(bookLists.length);

};