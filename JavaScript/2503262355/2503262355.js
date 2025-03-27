// 获取元素
let nameInput = document.querySelector("#usernameInput");
let confirmNameButton = document.querySelector("#confirmNameButton");
let questionText = document.querySelector("#question");
let yesButton = document.querySelector("#yes");
let noButton = document.querySelector("#no");
let mainImage = document.querySelector("#mainImage");
let nameInputContainer = document.querySelector("#nameInputContainer");
let confessionContainer = document.querySelector("#confessionContainer");
let buttonsContainer = document.querySelector(".buttons");
let xiaohongshuLink = document.querySelector("#xiaohongshuLink");
let douyinLink = document.querySelector("#douyinLink");
let repoLink = document.querySelector("#repoLink");
// 显示名字输入框
nameInputContainer.style.display = "block";
// 确认名字按钮点击事件
confirmNameButton.addEventListener("click", function () {
  let username = "雨乐";
  // 限制用户名长度，避免页面样式崩坏
  const maxLength = 20;
  const safeUsername = username ? username.substring(0, maxLength) : "";
  // 隐藏名字输入框，显示表白内容
  nameInputContainer.style.display = "none";
  // 隐藏新增的链接元素
  xiaohongshuLink.style.display = "none";
  douyinLink.style.display = "none";
  repoLink.style.display = "none";
  confessionContainer.style.display = "block";
  // 给按钮容器添加动画类名
  buttonsContainer.classList.add("slide-up-fade-in");
  // 将用户名添加到问题文本
  questionText.innerText = `可以成为我的恋人吗？${safeUsername}`;
});
confirmNameButton.click();
let clickCount = 0; // 记录点击 No 的次数
// No 按钮的文字变化
const noTexts = [
  "？你认真的吗…",
  "要不再想想？",
  "不许选这个！ ",
  "我会很伤心…",
  "不行:(",
];
// No 按钮点击事件
noButton.addEventListener("click", function () {
  clickCount++;
  // 让 Yes 变大，每次放大 2 倍
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;
  // 挤压 No 按钮，每次右移 50px
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;
  // 让图片和文字往上移动
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;
  // No 文案变化（前 5 次变化）
  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }
  // 图片变化（前 5 次变化）
  if (clickCount === 1) mainImage.src = "./images/2503262355/body2.ico"; // 震惊
  if (clickCount === 2) mainImage.src = "./images/2503262355/body3.ico"; // 思考
  if (clickCount === 3) mainImage.src = "./images/2503262355/body4.ico"; // 生气
  if (clickCount === 4) mainImage.src = "./images/2503262355/body5.ico"; // 哭
  if (clickCount >= 5) mainImage.src = "./images/2503262355/body6.ico"; // 之后一直是哭
});
// Yes 按钮点击后，进入表白成功页面
const loveTest = (username) =>
  `!!!喜欢你!! ( >᎑<)♡︎ᐝ${username ? `${username}♡︎ᐝ(>᎑< )` : ""}`;
yesButton.addEventListener("click", function () {
  let username = questionText.innerText.split("吗？")[1].trim();
  // 先创建基础 HTML 结构
  document.body.innerHTML = `
<div class="yes-screen">
<h1 class="yes-text"></h1>
<img src="./images/2503262355/end.ico" alt="拥抱" class="yes-image">
</div>
`;
  // 确保用户名安全地插入
  document.querySelector(".yes-text").innerText = loveTest(username);
  // 禁止滚动，保持页面美观
  document.body.style.overflow = "hidden";
  // 给表白成功页面添加慢慢浮现动画类名
  document.querySelector(".yes-screen").classList.add("fade-in");
});
