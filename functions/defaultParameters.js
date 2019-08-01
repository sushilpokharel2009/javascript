function sum(x, y = 76) {
    if (x != "" && y != "" && typeof x == "number" && typeof y == "number")
        console.log(x + y);
    else throw new Error("Invalid Data");
}

sum(10, 45);

let data = (function () {
    function data() {
        this.title = "Hello";
    }
    return data;
})();