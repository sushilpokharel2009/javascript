// //add event construct for modern browsers or IE
// //which fires the callback with a pre-converted target reference
// function addEvent(node, type, callback) {
//   if (node.addEventListener) {
//     node.addEventListener(
//       type,
//       function (e) {
//         callback(e, e.target);
//       },
//       false
//     );
//   } else if (node.attachEvent) {
//     node.attachEvent("on" + type, function (e) {
//       callback(e, e.srcElement);
//     });
//   }
// }

// //identify whether a field should be validated
// //ie. true if the field is neither readonly nor disabled,
// //and has either "pattern", "required" or "aria-invalid"
// function shouldBeValidated(field) {
//   return (
//     !(field.getAttribute("readonly") || field.readonly) &&
//     !(field.getAttribute("disabled") || field.disabled) &&
//     (field.getAttribute("pattern") || field.getAttribute("required"))
//   );
// }

// //field testing and validation function
// function instantValidation(field) {
//   //if the field should be validated
//   if (shouldBeValidated(field)) {
//     //the field is invalid if:
//     //it's required but the value is empty
//     //it has a pattern but the (non-empty) value doesn't pass
//     var invalid =
//       (field.getAttribute("required") && !field.value) ||
//       (field.getAttribute("pattern") &&
//         field.value &&
//         !new RegExp(field.getAttribute("pattern")).test(field.value));

//     //add or remove the attribute is indicated by
//     //the invalid flag and the current attribute state
//     if (!invalid && field.getAttribute("aria-invalid")) {
//       field.removeAttribute("aria-invalid");
//     } else if (invalid && !field.getAttribute("aria-invalid")) {
//       field.setAttribute("aria-invalid", "true");
//     }
//   }
// }

// //now bind a delegated change event
// //== THIS FAILS IN INTERNET EXPLORER <= 8 ==//
// //addEvent(document, 'change', function(e, target)
// //{
// //	instantValidation(target);
// //});

// //now bind a change event to each applicable for field
// var fields = [
//   document.getElementsByTagName("input"),
//   document.getElementsByTagName("textarea")
// ];

// for (var a = fields.length, i = 0; i < a; i++) {
//   for (var b = fields[i].length, j = 0; j < b; j++) {
//     addEvent(fields[i][j], "change", function (e, target) {
//       instantValidation(target);
//     });
//   }
// }

[
  [10, 20, 30],
  [20, 40, 51],
  [45, 785, 21]
];

let x = [
  [10, 20, 30],
  [20, 15, 48],
  [41, 78, 52, 96]
];


for (var a = 0; a < x.length; a++) {
  for (var b = 0; b < x[a].length; b++) {
    console.log(x[a][b]);
  }
}

let y = [10, 20, 30, {
  p: "dat1",
  q: "dat2"
}];

for (var a = 0; a < y.length; a++) {
  if (typeof y[a] == "object") {
    for (var b in y[a]) {
      console.log(y[a][b]);
    }
  } else console.log(y[a]);
}
let z = []

let userInfo = {
  id: "",
  name: "",
  email: "",
  address: {
    dno: "",
    city: "",
    location: "",
    state: ""
  }
}

let nameError = document.getElementById('nameError');
nameError.style.display = "none";

//onblur function
function requiredField(inputData) {
  nameError.style.display = "none";
  if (inputData.value.length < 1) {
    //red border
    inputData.style.borderColor = "#e74c3c";
    if (inputData.id == "author") nameError.style.display = "block";
  } else if (inputData.type == "email") {
    console.log("this is an email type");

    console.log(inputData);
    
    if (
      inputData.value.indexOf("@") != -1 &&
      inputData.value.indexOf(".") != -1
    ) {
      //green border
      inputData.style.borderColor = "#2ecc71";
    } else {
      //red border
      inputData.style.borderColor = "#e74c3c";
    }
  } else {
    //green border
    inputData.style.borderColor = "#2ecc71";
  }
}


function checkPassword(inputData) {
  console.log(document.getElementById('_password'), inputData.value);
  if (document.getElementById('_password').value != inputData.value) {
    alert("Password did not match");
    //   //red border
    inputData.style.borderColor = "#e74c3c";
  } else {
    //green border
    inputData.style.borderColor = "#2ecc71";
  }
}