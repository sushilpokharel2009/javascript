/*let bookTODoLists = (function () {
    function bookTODoLists() {
        this.title;
        this.author;
        this.isbn;
    }

    bookTODoLists.prototype.createNewDetail = function (title, author, isbn) {
        if (title != "" && author != "" && isbn != "") {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
        } else {
            throw new Error("Invalid Data");
        }
    };

    bookTODoLists.prototype.bookDetailsInfo = function () {
        let list = document.querySelector("#book-list");
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${this.title}</td>
            <td>${this.author}</td>
            <td>${this.isbn}</td>
            <td><a href="#" class = "btn btn-danger delete" id="removeBook" onclick="removeBook(this)">X</a></td>
        `;
        list.appendChild(row);
    };
    return bookTODoLists;
})();

let todoListObjectsOne = new bookTODoLists();
console.log(todoListObjectsOne);
todoListObjectsOne.createNewDetail("AAA", "BBB", "CCC");
todoListObjectsOne.bookDetailsInfo();

let todoListObjectsTwo = new bookTODoLists();
console.log(todoListObjectsTwo);
todoListObjectsTwo.createNewDetail("DDD", "EEE", "FFF");
todoListObjectsTwo.bookDetailsInfo();


let todoListObjectsThree = new bookTODoLists();
console.log(todoListObjectsThree);
todoListObjectsThree.createNewDetail("GGG", "HHH", "III");
todoListObjectsThree.bookDetailsInfo();
*/

let bookTODoLists = [];

function displayBook() {
  let list = document.querySelector("#book-list");
  let data = "";
  bookTODoLists.forEach(book => {
    let rowData = `      
        <tr>
         <td>${book["title"]}</td>
         <td>${book["author"]}</td>
         <td>${book["isbn"]}</td>
         <td><a href="#" class = "btn btn-danger" id="removeBook" onclick="removeBook(${
           book["id"]
         })">X</a></td>
         </tr>
       `;

    data += rowData;
  });

  list.innerHTML = data;
}

document.getElementById("addBook").onclick = function() {
  bookTODoLists.push({
    id: Math.random(),
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    isbn: document.getElementById("isbn").value
  });
  /*let todoList = new bookTODoLists();
    todoList.createNewDetail(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('isbn').value);
    todoList.bookDetailsInfo();
    */

  displayBook();
};

function removeBook(id) {
  //ele.parentNode.parentNode.parentNode.removeChild(ele.parentNode.parentNode);

  rowIndex = bookTODoLists.filter(data => data.id != id);
  bookTODoLists = rowIndex;
  displayBook();
  console.log(bookTODoLists.length);
}
