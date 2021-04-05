fetch("/json/pages.json")
.then(function (data) {
  return data.json();
})
.then(function (pages) {
  document.body.appendChild(getDataAndDisplayIt(pages));
})
.catch(function (error) {
  throw error;
});
