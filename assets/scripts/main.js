function displayChange() {
  if (document.body.clientWidth < "530") {
    document.getElementById("hel1").classList.remove("display-1");
    document.getElementById("hel1").classList.add("display-5");
    document.getElementById("hel2").classList.remove("display-3");
    document.getElementById("hel2").classList.add("display-6");
  } else {
    document.getElementById("hel1").classList.remove("display-5");
    document.getElementById("hel1").classList.add("display-1");
    document.getElementById("hel2").classList.remove("display-6");
    document.getElementById("hel2").classList.add("display-3");
  }
}
