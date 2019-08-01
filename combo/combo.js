var userObjects = ["AAA", "BBB", "CCC", "DDD", "EEE"];

display = "";
for (var a = 0; a < userObjects.length; a++) {
    display += `
    <div>
    <label>
     <input type="checkbox" onclick="checkForChecked()" name="content" value="${userObjects[a]}" /> ${userObjects[a]}
    </label>
    </div>
     `;
}

document.getElementById('checkBoxes').innerHTML = display;

function checkForChecked() {
    show = "";
    let boxes = document.querySelectorAll("#checkBoxes input");
    for (var box of boxes) {

        if (box.checked) {
            show += `
            <option>${box.value}</option>
            `;
        }
    }
    document.getElementById("list").innerHTML = show;
}