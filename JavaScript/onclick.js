// page head
const popupsSvg = function () {
  if (document.querySelectorAll("div.popups")[0].style.display == "none") {
    let title = this.textContent;
    popupstextdiv.innerHTML = popupstext[title];
    document.querySelectorAll(
      "div.popups div.popupsPrefix > div.title"
    )[0].textContent = title;
    document.querySelectorAll("div.popups")[0].style.display = "block";
  } else {
    document.querySelectorAll("div.popups")[0].style.display = "none";
  }
};

document.querySelectorAll("div.head-card > div.card-title")[0].textContent =
  title[title[0]];

document
  .querySelectorAll("div.popups > div.body > div.popupsPrefix > svg")[0]
  .addEventListener("click", popupsSvg);

document
  .querySelectorAll("div.head div.prefix-right div[id] > span")
  .forEach(function (element) {
    element.addEventListener("click", popupsSvg);
  });

// axis button
const axisbutton = function () {
  let from = document.querySelectorAll("body > div.from")[0];
  if (this.className == "svg") {
    from.style.display = "none";
  } else {
    from.style.display = "block";
  }
};

document
  .querySelectorAll("body > div.from > div.address > div.body > div.svg")
  .forEach(function (element) {
    element.addEventListener("click", axisbutton);
  });

document.querySelectorAll("div.axisbutton").forEach(function (element) {
  element.addEventListener("click", axisbutton);
});
