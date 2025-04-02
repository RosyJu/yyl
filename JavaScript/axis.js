js.axis = true
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
let loglist = document.querySelectorAll("div.axis > div.logs > div.logslist")[0]
for (let key in logs) {
    let time = [
        String(logs[key].time).slice(0, 2),
        String(logs[key].time).slice(2, 4),
        String(logs[key].time).slice(4, 6),
        String(logs[key].time).slice(6, 8),
        String(logs[key].time).slice(8, 10)
    ]
    time.push(`20${time[0]}.${time[1]}.${time[2]} ${time[3]}:${time[4]}`)
    let newlist = document.createElement("div")
    newlist.className = "list"

    let body = document.createElement("div")
    body.className = "body"
    let emoji = document.createElement("div")
    emoji.className = "emoji"

    let description = document.createElement("div")
    description.className = "description"
    description.textContent = logs[key].description
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = logs[key].time
    let label = document.createElement("label")
    label.setAttribute("for",logs[key].time)
    let timetitle = document.createElement("div")
    timetitle.className = "time"
    timetitle.textContent = time[5]

    let title = document.createElement("div")
    title.className = "title"
    title.textContent = logs[key].title

    let img = document.createElement("img")
    img.src = `./images/emojis/${checkemoji(logs[key].emoji)}.png`

    label.insertAdjacentElement("afterbegin", title)

    body.insertAdjacentElement("afterbegin", description)
    body.insertAdjacentElement("afterbegin", checkbox)
    body.insertAdjacentElement("afterbegin", label)
    body.insertAdjacentElement("afterbegin", timetitle)

    emoji.insertAdjacentElement("afterbegin", img)
    
    newlist.insertAdjacentElement("afterbegin", body)
    newlist.insertAdjacentElement("afterbegin", emoji)

    loglist.insertAdjacentElement("afterbegin", newlist);
}