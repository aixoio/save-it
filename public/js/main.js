if (localStorage.getItem("new") == null || JSON.parse(localStorage.getItem("new")) == true) {
  localStorage.setItem("new", JSON.stringify(false));
  location.href = "/welcome/";
}
