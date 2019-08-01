let websitesList = [{
    title: "Facebook",
    link: "https://www.facebook.com"
  },
  {
    title: "Google",
    link: "https://www.google.com"
  },
  {
    title: "Yahoo",
    link: "https://www.yahoo.com"
  },
  {
    title: "Youtube",
    link: "https://www.youtube.com"
  },
  {
    title: "Freecodecamp",
    link: "https://www.freecodecamp.org"
  },
  {
    title: "Codepen",
    link: "https://codepen.io"
  }
];
//Hide the content seen
let divs = document.getElementsByClassName("lorem");
for (let data of divs) {
  data.style.display = "none";
}

//Create select options

let sel = document.getElementById("website");

let newData = "";
for (let web of websitesList) {
  newData += "<option value=" + web.title + ">" + web.title + "</option>";
}
sel.innerHTML = newData;

//Work on function to display the specified content
function myNewFunction(el) {
  let dataShow = document.getElementsByClassName("lorem");
  for (let dShow of dataShow) {
    dShow.style.display = "none";
  }



  let x = document.getElementById(el.value.toLowerCase());
  x.style.display = "block";
}