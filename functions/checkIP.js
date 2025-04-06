exports.handler = async function (event, context) {
  fetch("https://ipapi.co/json")
    .then((response) => response.json())
    .then((data) => {
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
      Object.assign(ipapi, data);
      Object.freeze(ipapi);
    })
    .catch((error) => {
      console.error("请求失败:", error);
    });
};
