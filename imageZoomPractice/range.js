let imageList = document.querySelectorAll(".wrapper img");
for (let image1 of imageList) {
  image1.onmouseenter = function() {
    document.getElementById("mainImage").src = this.src;
  };
}
