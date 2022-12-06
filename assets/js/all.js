"use strict";

var BaseURl = "https://json-server-vercel-seven.vercel.app/";
$(document).ready(function () {
  //GET請求
  axios.get("".concat(BaseURl, "DailyBibles")).then(function (response) {
    return console.log(response);
  })["catch"](function (error) {
    return console.log(error);
  });
  axios.get("".concat(BaseURl, "Abouts")).then(function (response) {
    return console.log(response);
  })["catch"](function (error) {
    return console.log(error);
  });
  axios.get("".concat(BaseURl, "Historys")).then(function (response) {
    return console.log(response);
  })["catch"](function (error) {
    return console.log(error);
  });
  axios.get("".concat(BaseURl, "Schedules")).then(function (response) {
    return console.log(response);
  })["catch"](function (error) {
    return console.log(error);
  }); //users

  axios.get("".concat(BaseURl, "users")).then(function (response) {
    return console.log(response);
  })["catch"](function (error) {
    return console.log(error);
  });
});
//# sourceMappingURL=all.js.map
