let imagesList = document.querySelectorAll(".wrapper img");


for (let image1 of imagesList) {
    image1.onmouseover = function () {
        document.getElementById('mainImage').src = this.src;
    };
}