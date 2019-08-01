// var x = 10;

// console.log(this);

// function sample() {
//     let x;
//     console.log(this);
//     console.log(this.x);
// }

// sample();

// let employee = function () {
//     this.id;
//     this.name;
//     this.salary;
//     this.createEmployee = function (id, name, salary) {
//         this.id = id;
//         name = name;
//         salary = salary;
//     }
//     this.employeeDetails = function () {
//         console.log(this.id, this.name, this.salary, this);
//     }
// }

// let emp1 = new employee();
// emp1.createEmployee();
// emp1.employeeDetails();

// let emp2 = new employee();
// emp2.createEmployee(20, "Jack", 85747);
// emp2.employeeDetails();

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {

//     }

// }
document.getElementById('btn').onclick = function () {

    var xhttp = new XMLHttpRequest();
    var url = "https://www.w3schools.com/js/customers_mysql.php";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //myFunction(this.responseText);
            console.log(JSON.parse(this.responseText));
            myFunction(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function myFunction(arr) {
    var data = "";
    //var arr = JSON.parse(response);    
    data += "<tr><th>Name</th><th>City</th><th>Country</th></tr>"
    for (var i = 0; i < arr.length; i++) {
        data += "<tr><td>" +
            arr[i].Name +
            "</td><td>" +
            arr[i].City +
            "</td><td>" +
            arr[i].Country +
            "</td></tr>";
    }

    document.getElementById('demo').innerHTML = data;
}