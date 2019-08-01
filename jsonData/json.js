// let x = 10;
// let y ={a: 10, b: 60};

// console.log(new Date().toLocaleDateString());
// console.log("Hello---------:" + new Date().getHours());

// let x = [10, 20, 45, 78, 96];
// console.log(Math.max(...x));

// console.log((10).toString() + 80);

// // slice(), splice, push, pop, shift, unshift, filter, map,

// let i = [12, 54, 87, 96, 85, 95, 41, 25, 68, 412, 5];

// //[87,96,85,95,412]
// console.log(i.filter(function (data) {

//     return data > 80;

// }));

// console.log(i.map(function (data) {
//     if (data > 90)
//         return "Data: " + data;
//     else return null;
// }));

//document.getElementById("#btn").addEventListener(click, getData);

//document.getElementById('btns').onclick = function () {
function getData() {
  var xhttp = new XMLHttpRequest();
  var url = "https://jsonplaceholder.typicode.com/posts";

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      myFunc(data);
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}

sendAjaxRequest("", "GET", true);
function sendAjaxRequest(url, type, async) {}
function deleteText(id) {
  console.log(id, "called");
  var xhttp = new XMLHttpRequest();
  var url = `https://jsonplaceholder.typicode.com/post/${id}`;

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
  getData();
}

getData();

function myFunc(data) {
  // console.log(data);
  //console.log("Here are :" + data.length + " records");
  let record = "";
  //for (let d of data) console.log(d);
  console.log(data.length);

  for (let d of data) {
    record += `
    <p>ID is : ${d["id"]}</p>
    <p>Title is : ${d["title"]}</p>
    <p>Content : ${d["body"]}</p>
    <a href="#" class = "btn btn-primary" id="edit onclick = "editText(${
      d["body"]
    })">Edit</a>
    <a href="#" class = "btn btn-secondary" id="delete" onclick = "deleteText(${
      d["id"]
    })">Delete</a>       
    `;
  }

  document.getElementById("result").innerHTML = record;
}
myFunc();

document.getElementById("result").onclick = function() {
  console.log("hello");
};

function editText(id, txt) {}

function deleteText(id) {
  console.log("My id :" + id);
  document.getElementById("delete").innerHTML = "";
}
