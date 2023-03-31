function responsiveMobile() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// var currentUrl = window.location.pathname;
// console.log(currentUrl);
// var links = document.querySelectorAll(".navbar a");
// console.log(links);
// for (var i = 0; i < links.length; i++) {
//   if (links[i].href == currentUrl) {
//     links[i].classList.add("active");
//     break;
//   }
// }

// Listen for messages from the parent window
window.addEventListener('message', function(event) {
  if (event.data.type === 'updateActiveLink') {
    // Update the active link based on the URL in the message
    var LSI = event.data.url.lastIndexOf('/');
    var URLPart = event.data.url.substring(LSI + 1);
    console.log(URLPart);
    console.log("navbar");
    updateActiveLink(URLPart);
  }
});

// Function to update the active link based on the current page URL
function updateActiveLink(currentUrl) {
  var links = document.querySelectorAll('.navbar a');
  for (var i = 0; i < links.length; i++) {
    var linkUrl = links[i].getAttribute('href');
    console.log(linkUrl);
    if (linkUrl == currentUrl) {
      console.log('true');
      links[i].classList.add('active');
    } else {
      links[i].classList.remove('active');
    }
  }
}