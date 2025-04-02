js.index = true
//获取日期的DOM
const dateday = document.querySelectorAll(
  "div.date > div.day > span.textday.text"
)[0];
const datehours = document.querySelectorAll(
  "div.date > div.time > span.texthours.text"
)[0];
const dateminute = document.querySelectorAll(
  "div.date > div.time > span.textminute.text"
)[0];
const datesecond = document.querySelectorAll(
  "div.date > div.time > span.textsecond.text"
)[0];

// 阻止Tab键的默认行为
document.addEventListener('keydown', function(event) {
  if (event.key === 'Tab') {
      event.preventDefault();
  }
});

function Fdate() {
  // 计算时间戳起点终点时间段的时间戳差距
  const start = 1729869000; // 2024.12.25T23:10+0800
  let end = Math.floor(Date.now() / 1000);
  let TimePeriod = end - start; // 差距
  // 计算单位时间差
  let day = Math.floor(TimePeriod / 86400); // 天
  let hours = Math.floor((TimePeriod - day * 86400) / 3600); // 时
  let minute = Math.floor((TimePeriod - (day * 86400 + hours * 3600)) / 60); // 分
  let second = Math.floor(
    TimePeriod - (day * 86400 + hours * 3600 + minute * 60)
  ); // 秒
  // 页面插入已完成的时间
  dateday.textContent = day;
  datehours.textContent = hours.toString().padStart(2, "0");
  dateminute.textContent = ` ${minute.toString().padStart(2, "0")}`;
  datesecond.textContent = ` ${second.toString().padStart(2, "0")}`;
  return Fdate
}

let date = setInterval(Fdate(), 200);

let popupstextdiv = document.querySelectorAll("div.popupstext")[0];
const popupstext = {
  "License Agreement": `
MIT License
<br />
<br />
Copyright (c) 2025 RosyJu
<br />
<br />
Permission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br />
<br />
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
<br />
<br />
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
<br /><br /><a href="https://github.com/RosyJu/yyl/blob/main/LICENSE" target="_blank">github.com/RosyJu/yyl/blob/main/LICENSE</a>`,
  "Project Address": `<a href="https://github.com/RosyJu/yyl" target="_blank">github.com/RosyJu/yyl</a>`,
  "Contact Us":`Email:755126039@qq.com<br />QQ:755126039`
};

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

document.querySelectorAll("div.head-card > div.card-title")[0].textContent = title[title[0]]

document
  .querySelectorAll("div.popups > div.body > div.popupsPrefix > svg")[0]
  .addEventListener("click", popupsSvg);

let headprefix = document.querySelectorAll("div.head div.prefix-right div[id] > span")
headprefix.forEach(function(element) {
  element.addEventListener("click", popupsSvg);
});
