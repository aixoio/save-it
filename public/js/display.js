get();
async function get() {
  const req = await fetch("/json/list.json");
  const res = await req.json();
  for (let i = 0; i < res.length; i++) {
    const url = "/uploads/" + res[i];
    fetch(url)
    .then((data) => data.json())
    .then(function (json) {
      let btn = document.createElement("button");
      btn.textContent = "Download " + json.name;
      btn.addEventListener("click", function (event) {
        download(json.filedata, json.name);
      });
      document.body.appendChild(btn);
      document.body.appendChild(document.createElement("br"));
    })
    .catch(function (error) {
      throw error;
    });
  }
}
function download(file, name) {
  var a = document.createElement("a");
  a.hidden = true;
  document.body.appendChild(a);
  a.href = file;
  a.download = name;
  a.click();
  a.remove();
}
