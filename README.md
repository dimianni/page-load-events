# Visualization of page load events

[Here](https://dimianni.github.io/page-load-events/) I played around with the following event listeners to determine what are the steps of web page load:

```JavaScript
   document.addEventListener("DOMContentLoaded", function(){})
```
```JavaScript
   document.addEventListener('readystatechange', function(){})
```
```JavaScript
   window.addEventListener("load", function(){})
```

Check the console to see the load order.

## To clone the repo run the following command:

```bash
   git clone https://github.com/dimianni/page-load-events.git
```
