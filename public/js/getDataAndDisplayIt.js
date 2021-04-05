function getDataAndDisplayIt(data) {
  var elm = document.createElement("p");
  fetch("/json/pages.json")
  .then(function (json) {
    return json.json();
  })
  .then(function (json) {
    for (let i = 0; i < json.length; i++) {
      var a = document.createElement("a");
      a.href = json[i].url;
      a.textContent = json[i].name;
      elm.appendChild(a);
      if (i !== (json.length - 1) && i >= 0) {
        elm.innerHTML += " | ";
      }
    }
  })
  .catch(function (error) {
    throw error;
  });
  return elm;
}
