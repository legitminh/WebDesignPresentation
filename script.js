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