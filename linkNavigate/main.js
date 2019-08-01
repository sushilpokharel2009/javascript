let websitesList = [
  {
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

let divs = document.getElementsByClassName("hidden");

for (let data of divs) {
  //data.style.visibility = "hidden";
  data.style.display = "none";
}

let sel = document.getElementById("website");
let data = "";
for (let web of websitesList) {
  data += "<option value=" + web.title + ">" + web.title + "</option>";
}
sel.innerHTML = data;

function myNewFunction(el) {
  //let google = document.getElementById("google");

  let divs = document.getElementsByClassName("hidden");

  for (let data of divs) {
    //data.style.visibility = "hidden";
    data.style.display = "none";
  }

  console.log(el.value);
  document.getElementById(el.value.toLowerCase()).style.display = "block";

  //console.log((el.options[el.selectedIndex].innerHTML = google));
}
