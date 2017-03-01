/**
 * Created by sean.j.greene on 2/27/2017.
 * content-script.js
 */

var listingsElement;
var listingsFound = true;
var listingsToken;
var numberOfListings = 0;

window.console.log("Adding audio tag to matching eBay webpage");
var audioTag = document.createElement('audio');
audioTag.setAttribute('src', './audio/notif_general.mp3');
var rightDiv = document.getElementsByClassName("right")[0];
rightDiv.appendChild(audioTag);
document.getElementById('audio').play();

window.console.log("Starting results lookup...");
try {
  // check if there are no results, but suggested results (not a true result found)
  document.getElementsByClassName("sm-md")[0].innerHTML;
  window.console.log("No true results found...");
  listingsFound = false;
} catch(error1) {
  try {
    // check for alternate result element found
    listingsElement = window.document.getElementsByClassName("listingscnt")[0].innerHTML;
    window.console.log("Listing count found of: ", listingsElement);
  } catch(error2) {
    window.console.log("No Listings count found");
    try {
      // check for primary result element found
      listingsElement = window.document.getElementsByClassName("rcnt")[0].innerHTML;
      window.console.log("Listing count found of: ", listingsElement);
    } catch(error3) {
      window.console.log("No result count found");
      listingsFound = false;
    }
  }
}

if(listingsFound) {
  window.console.log("Starting the tab work...");
  if(listingsElement !== "0" || listingsElement !== "") {
    // do the stuff to play the sound and flip the tab
    document.getElementById('audio').play();
  }
}

// listingsToken = listingsElement.split(" ");
// numberOfListings = listingsToken[0];
// if (numberOfListings !== "0" || numberOfListings !== ""){
//   bool = true;
// }