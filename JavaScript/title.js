js.title = true
let title = [1, "你记得花,花就不会枯萎.","双手合十的愿望是......"];
title[0] = Math.floor(Math.random() * (title.length - 1) + 1);
document.querySelectorAll("head > title")[0].textContent = title[title[0]];