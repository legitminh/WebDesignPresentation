/**
 * Master script
    * Run on all slidess
 */

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
var maxPage = null; //if is defined, then go to maxPage if less than 0
var minPage = null; //if is defined, then go to minPage if overslide


/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

var currentPage = 0;
//return true if page doens't exist
function pageDontExist(id) {
  return (document.getElementById(id) == null);
}
function togglePage(id, open = true) { //default to open
  var divElement = document.getElementById(id);
  if (open === true) {
    divElement.removeAttribute("hidden");
  }
  else {
    divElement.setAttribute("hidden", "true");
  }
}
//Page functions
const pageFunctions = {
  0: function() {

  },
  1: function() {
    const HelloWorld = function(nothing) {
      console.log("Hello world!")
    }
    HelloWorld("console.log");
  },
  2: function() {

    form = document.getElementById(currentPage.toString() + ".form");
    form.addEventListener("submit", function(event) {
      const formData = new FormData(form);
      var nameInput = document.getElementById("2.form.text").value;
      alert(nameInput);
    });
  },
  3: function() {
    const images = [
      "https://blog.webhopers.com/wp-content/uploads/2022/05/Web-Design-Company-in-Salem.jpg",
      "https://scitechinstitute.org/wp-content/uploads/2020/04/Girls-Who-Code-001.jpg",
      "https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/code-quest/2020/CodeQuest%20logo.jpg.pc-adaptive.full.medium.jpg",
      "https://asisctf.com/storage/avatars/OhEuhwVPXvvS2E39Qh8C5GiuXRxmxMn3vDJ3y0wK.png",
      "https://cdn.discordapp.com/icons/319229348181966849/cb298842f9ef2404c61be1425468060e.webp?size=160"
    ];
    document.getElementById('3.scriptModDiv').innerHTML = ""; //clear div
    let imagesDiv = document.createElement("div");
    imagesDiv.style = "display: flex; flex-wrap: wrap; justify-content: center;";
    images.forEach((thing) => {
      let div = document.createElement("div");
      div.style = "overflow: hidden; align: center";
      let img = new Image();
      img.src = thing;
      img.style = "width: 128px; height: 128px; margin: 16px; border-radius: 8px; object-fit: cover; align: center";
      div.appendChild(img);
      imagesDiv.appendChild(div);
    });
    document.getElementById('3.scriptModDiv').appendChild(imagesDiv);
  },
  4: function() {
    // let numbers = [0,8,16,32];
    // console.log(numbers.sort().toString());

    // console.log(numbers);

    // numbers = [-32,-16,-8,0,8,16,32];
    // console.log(numbers.sort());

    numbers = [-32, -16, -8, 0, 8, 16, 32];
    console.log(numbers.sort(function(a, b) { a - b }));
  },
  5: function() {
    form = document.getElementById(currentPage.toString() + ".form");
    form.addEventListener("submit", function(event) {
      // const formData = new FormData(form);
      if (document.getElementById("5.form.2").checked) {
        alert("You're right");
      }
      else {
        alert("You're wrong");
      }
    });

  }
};
//Main navigation event listener
document.addEventListener('keydown', function(e) {
  if (e.key == "ArrowRight") {
    togglePage(currentPage, false);
    currentPage++;
    if (pageDontExist(currentPage)) { currentPage = (minPage ? minPage : currentPage - 1); } //reset
    togglePage(currentPage);
    if (pageFunctions[currentPage.toString()]) { pageFunctions[currentPage.toString()]() }; //apparently a string works with an int
  }
  else if (e.key == "ArrowLeft") {
    togglePage(currentPage, false);
    currentPage--;
    if (pageDontExist(currentPage)) { currentPage = (maxPage ? maxPage : 0); }
    togglePage(currentPage);
    if (pageFunctions[currentPage.toString()]) { pageFunctions[currentPage.toString()]() }; //apparently a string works with an int
  }
  else if (event.shiftKey && event.key === "Enter") {
    openFullscreen();
  }
});