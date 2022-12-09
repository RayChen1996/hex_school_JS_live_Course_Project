"use strict";

var BaseURl = "https://json-server-vercel-seven.vercel.app/";
var logo = document.querySelector(".logo"); // $(document).on("load",() => {
//GET請求
// axios.get(`${BaseURl}DailyBibles`)
// .then( (response) => console.log(response))
// .catch( (error) => console.log(error))
// axios.get(`${BaseURl}Historys`)
// .then( (response) => console.log(response))
// .catch( (error) => console.log(error))
// axios.get(`${BaseURl}Schedules`)
// .then( (response) => console.log(response))
// .catch( (error) => console.log(error))
//users
// axios.get(`${BaseURl}users`)
// .then( (response) => console.log(response))
// .catch( (error) => console.log(error))
//   setTimeout(function (){
//     console.log("進入首頁吧")
//  logo.click();
//   },3000)
// });
"use strict";

var strHTML = ''; //迴圈暫存字串變數

function ActivityListInit() {
  axios.get("".concat(BaseURl, "Abouts")).then(function (response) {
    console.log(response.data);
    ActivityRender(response.data);
  });

  function ActivityRender(aryData) {
    var List = document.querySelector(".Activity");
    aryData.forEach(function (o) {
      strHTML += "\n                <div class=\"col\">\n                    <div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"".concat(o.Photo, "\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(o.Title, "</h5>\n                        <p class=\"card-text\">").concat(o.SubTitle, "</p>\n                        <a href=\"#\" class=\"btn btn-primary\">\u67E5\u770B</a>\n                    </div>\n                    </div>\n                </div>\n             ");
    });
    List.innerHTML = strHTML;
  }
}

ActivityListInit();
//# sourceMappingURL=all.js.map
