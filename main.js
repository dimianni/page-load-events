/*---------------------------------------------------------*/
/* Fourth
-----------------------------------------------------------*/

// The load event on the window object triggers when the whole page is loaded including styles, images and other resources.
window.addEventListener("load", function (event) {
    console.log('load');
});


/*---------------------------------------------------------*/
/* Second
-----------------------------------------------------------*/

// The browser fully loaded HTML, and the DOM tree is built, 
// but external resources like pictures <img> and stylesheets may not yet have loaded.
document.addEventListener("DOMContentLoaded", function (event) {
    console.log('DOMContentLoaded');
});


/*---------------------------------------------------------*/
/* First
-----------------------------------------------------------*/
console.log('Start');


/*---------------------------------------------------------*/
/* Third
-----------------------------------------------------------*/

document.onreadystatechange = function () {
    // The document and all sub-resources have finished loading. The state indicates that the load event is about to fire.
    if (document.readyState == "complete") {
        console.log('readyState');
    }
}
