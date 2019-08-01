let funcClosure = (function () {
    let data = "";
    //function closure to create memory
    function funcClosure() {
        this.name;
        this.email;
        this.phone;

    }
    //return funcClosure;
    //prototype object to replicate the objects from existing memory objects
    funcClosure.prototype.createNewEmployee = function (name, email, phone) {
        if (name != "" && email != "" && phone != "") {
            this.name = name;
            this.email = email;
            this.phone = phone;
        } else {
            throw new Error("Invalid");
        }
    };

    //Created template literal to display objects in the UI
    funcClosure.prototype.displayEmployeeInfo = function () {
        data += `
            <h1>Employee Info</h1>
            Name: ${this.name}<br>
            Email: ${this.email}<br>
            Phone: ${this.phone}<br>
        
        `

        document.getElementById('employeeInfo').innerHTML = data;
    };

    return funcClosure;
})();


//Creating object, calling prototype function/method and passing data, displaying in UI
let empOne = new funcClosure();
empOne.createNewEmployee("AAA", "a@gmail.com", "1111111111");
empOne.displayEmployeeInfo();
console.log(empOne);



let empTwo = new funcClosure();
empTwo.createNewEmployee("BBB", "b@gmail.com", "2222222222");
empTwo.displayEmployeeInfo();
console.log(empTwo);

let empThree = new funcClosure();
empThree.createNewEmployee("CCC", "c@gmail.com", "3333333333");
empThree.displayEmployeeInfo();
console.log(empThree);

let empFour = new funcClosure();
empFour.createNewEmployee("DDD", "d@gmail.com", "4444444444");
empFour.displayEmployeeInfo();
console.log(empFour);