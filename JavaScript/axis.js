let pagelist = document.querySelectorAll("div.axis > div.pages > div.pageslist")[0]
for (let key in pages) {
    let newlist = document.createElement("a")
    newlist.setAttribute("href", `./${pages[key].time}.html`);
    newlist.setAttribute("target", `_blank`);
    newlist.setAttribute("class", `list`);
    newlist.insertAdjacentElement("afterbegin", document.createElement("div"));
    newlist.insertAdjacentElement("afterbegin", document.createElement("div"));
    let div = newlist.querySelectorAll("div")
    div[0].setAttribute("class", `list`);
    div[0].insertAdjacentElement("afterbegin", document.createElement("span"));
    let span = div[0].querySelectorAll("span")
    span[0].textContent = pages[key].title
    div[1].setAttribute("class", `listsvg`);
    pagelist.insertAdjacentElement("afterbegin", newlist);
}