//***********For single image range */

// let imageRange = document.getElementById("imageRange");
// let mainImage = document.getElementById("mainImage");
// mainImage.style.height = "500px";
// mainImage.style.width = "500px";
// imageRange.oninput = function () {
//   mainImage.style.height = this.value + "px";
//   mainImage.style.width = this.value + "px";

// }

//************ */For all Images do ranging together****************

// let allImages = document.querySelectorAll(".wrapper img");
// let inputImageRange = document.getElementById("imageRange");

// inputImageRange.oninput = function () {
//   for (let imgs of allImages) {
//     imgs.style.height = this.value + 'px';
//     imgs.style.width = this.value + 'px';
//   }

// }

//************ */For specific Image do ranging ****************

let allImgs = document.querySelectorAll("img");
let imgId = null;

for (let allimg of allImgs) {
  allimg.onclick = function () {
    imgId = this.id;
  };
}

let inputImageRange = document.getElementById("imageRange");
inputImageRange.oninput = function () {
  if (imgId != null) {
    let x = document.getElementById(imgId);
    x.style.height = this.value + "px";
    x.style.width = this.value + "px";
  }
};