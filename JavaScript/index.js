//获取日期的DOM
const dateday = document.querySelectorAll("div.date > div.day > span.textday.text")[0]
const datehours = document.querySelectorAll("div.date > div.time > span.texthours.text")[0]
const dateminute = document.querySelectorAll("div.date > div.time > span.textminute.text")[0]
const datesecond = document.querySelectorAll("div.date > div.time > span.textsecond.text")[0]

let date = setInterval(function() {
    // 计算时间戳起点终点时间段的时间戳差距
    const start = 1729869000
    let end = Math.floor(Date.now() / 1000)
    let TimePeriod = end - start // 差距
    // 计算单位时间差
    let day = Math.floor(TimePeriod / 86400) // 天
    let hours = Math.floor( (TimePeriod - ( day * 86400 ) ) / 3600 ) // 时
    let minute = Math.floor( (TimePeriod - ( day * 86400 + hours * 3600 ) ) / 60) // 分
    let second = Math.floor( (TimePeriod - ( day * 86400 + hours * 3600 + minute * 60) )) // 秒
    // 页面插入已完成的时间
    dateday.textContent = day
    datehours.textContent = hours.toString().padStart(2, '0')
    dateminute.innerHTML = `&ensp;${minute.toString().padStart(2, '0')}`
    datesecond.innerHTML = `&ensp;${second.toString().padStart(2, '0')}`
},200)