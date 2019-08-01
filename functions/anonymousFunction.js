let op = function(a, b, operation) {
  //   let x = document.getElementById("first").value;
  //   let y = document.getElementById("second").value;
  //   let operation = document.getElementById("operation").value;
  //   let tot = document.getElementById("total.value").innerHTML;
};

document.getElementById("getResult").onclick = op(
  document.getElementById("first").value,
  document.getElementById("second").value,
  document.getElementById("operation").value
);
//***************************************** */

function calc() {
  var n1 = parseFloat(document.getElementById("first").value);
  var n2 = parseFloat(document.getElementById("second").value);

  var oper = document.getElementById("operation").value;
  var total = document.getElementById("result");

  if (oper === "+") {
    console.log("hello1");
    total.value = n1 + n2;
  }

  if (oper === "-") {
    total.value = n1 - n2;
  }

  if (oper === "X") {
    total.value = n1 * n2;
  }
}
calc();
