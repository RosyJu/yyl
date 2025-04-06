exports.handler = async function (event, context) {
  fetch("https://ipapi.co/json")
    .then((response) => response.json())
    .then((data) => {
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    })
    .catch((error) => {
      return {
        statusCode: 200,
        body: JSON.stringify([error]),
      };
    });
};
