/**
 * Created by sean.j.greene on 2/27/2017.
 * content-script.js
 */

var listingsElement;
var listingsFound = true;

var sound = new Audio(browser.extension.getURL("audio/notif_general.mp3"));

try {
  // check if there are no results, but suggested results (not a true result found)
  document.getElementsByClassName("sm-md")[0].innerHTML;
  listingsFound = false;
} catch(error1) {
    try {
      // check for alternate result element found
      listingsElement = window.document.getElementsByClassName("listingscnt")[0].innerHTML;
    } catch(error2) {
        //listingscnt tag was not found. Continue checking for rcnt tag instead
        try {
          // check for primary result element found
          listingsElement = window.document.getElementsByClassName("rcnt")[0].innerHTML;
        } catch(error3) {
          // didn't find any listings tag at all. Do nothing.
          listingsFound = false;
        }
    }
}

if(listingsFound) {
  if(listingsElement !== "0" && listingsElement !== "") {
    // do the stuff to play the sound and flip the tab
    sound.play();
  }
}