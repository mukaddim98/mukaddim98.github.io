function myFunction(x) {
  if (x.matches) {
    document.getElementById("hello2").innerHTML = "Hello";
    console.log(x);
  }
}

var x = window.matchMedia("(max-width: 530px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
