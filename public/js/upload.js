document.getElementById("upload-form").onsubmit = function (event) {
  event.preventDefault();
  var file = event.target[0].files[0];
  if (file.size > 5000000) {
    let error = file.name + " is to big the max is 5mb";
    alert(error);
    throw new Error(error);
  }
  var reader = new FileReader();
  var data = {
    name: file.name,
    size: file.size
  }
  reader.onload = async function () {
    data.filedata = reader.result;
    try {
      await fetch("/post/js/json/upload/", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      throw error;
    }
  }
  reader.readAsDataURL(file);
}
