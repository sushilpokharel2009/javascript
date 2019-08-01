/// Anonymous functions
// A function with default values
// Callback functions
// Arrow functions
// Recursive functions
// Rest parameters
// Spread parameters
// Using new keyword
// Function closures

/*

let userInfo = [{
        id: "kjasdfjh",
        name: "John",
        email: "john@yahoo.com"
    },
    {
        id: "ksahd",
        name: "Jack",
        email: "jack@hotmail.com"
    },
    {
        id: "skadhf",
        name: "Michael",
        email: "michael@yahoo.com"
    }
];

let ele = document.getElementById('root');

let data = "";

data += "<table>";
data += "<tr><th>Id</th><th>Name</th><th>Email</th></tr>";

for (let info of userInfo) {
    data += "<tr><td>" + info.id + "</td><td>" + info.name + "</td><td>" + info.email + "</td></tr>";
}

data += "</table>";

ele.innerHTML = data;

*/

let x = function () {
    console.log("function Called")
};

console.log(x);
//x();

(function () {
    console.log("Anonymous function called");
})();