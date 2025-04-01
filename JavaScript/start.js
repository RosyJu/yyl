const ipapi = {};

fetch("https://ipapi.co/json")
  .then((response) => response.json())
  .then((data) => {
    Object.assign(ipapi, data);
    Object.freeze(ipapi);
  })
  .catch((error) => {
    console.error("请求失败:", error);
  });
(function (originalFetch) {
  window.fetch = function () {
    return originalFetch.apply(this, arguments).catch(function () {
      window.location.href = "https://rosy.love/404.xhtml";
    });
  };
})(window.fetch);