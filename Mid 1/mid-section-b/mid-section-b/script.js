function previousImage() {
  var img = document.querySelector("#container img");

  if (img.src != "./one.svg") {
    if (img.src == "./two.svg") {
      var img_thumbnail = document.getElementById("one");
      img_thumbnail.style.opacity = 1;
      img.src = "./one.svg";
    }
    if (img.src == "./three.svg") {
      var img_thumbnail = document.getElementById("two");
      img_thumbnail.style.opacity = 1;
      img.src = "./two.svg";
    }
    if (img.src == "./four.svg") {
      var img_thumbnail = document.getElementById("one");
      img_thumbnail.style.opacity = 1;
      img.src = "./one.svg";
    }
  }
}

function nextImage() {
  var img = document.querySelector("#container img");
  img.src = "./two.svg";

  if (img.src == "./one.svg") {
    var img_thumbnail = document.getElementById("two");
    img_thumbnail.style.opacity = 1;
    img.src = "./two.svg";
  }
  if (img.src == "./two.svg") {
    var img_thumbnail = document.getElementById("three");
    img_thumbnail.style.opacity = 1;
    img.src = "./three.svg";
  }
  if (img.src == "./three.svg") {
    var img_thumbnail = document.getElementById("one");
    img_thumbnail.style.opacity = 1;
    img.src = "./one.svg";
  }
}
