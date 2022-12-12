"use strict";

// const BaseURl = `https://json-server-vercel-seven.vercel.app/`
var BaseURl = "http://127.0.0.1:3000/"; //https://json-server-vercel-a.vercel.app
// const BaseURl = `http://localhost:3000/`

var logo = document.querySelector(".logo");
var expireMins = 30; //登入過期時間(分鐘)

var IsLogin = false;

function ShowLoginMessage(user) {
  Swal.fire({
    title: " \u767B\u5165\u6210\u529F!",
    text: '',
    icon: 'success',
    confirmButtonText: 'OK'
  });
}

function CheckLogin() {
  setInterval(function () {
    if (IsLogin) {
      // Swal.fire(
      //   '成功登入！',
      //   '',
      //   'success'
      // )
      // Swal.fire({
      //   title: '新增成功!',
      //   text: '',
      //   icon: 'success',
      //   confirmButtonText: 'OK'
      // })
      $("ul.nav").show();
    } else {// $("ul.nav").hide()
    }
  }, 1000);
}

CheckLogin();
"use strict";

$(".postArticle").on("click", function () {
  axios.post("".concat(BaseURl, "Abouts"), {
    tag: 'javascriptBasics@gmail.com',
    Photo: 'https://github.com/RayChen1996/js_hex_project-seed-church/blob/main/img/LINE_ALBUM_20161224%E7%A8%AE%E5%AD%90%E6%95%99%E6%9C%83%E8%81%96%E8%AA%95%E5%A4%9C%E7%9B%B8%E7%89%87_221127.jpg?raw=true',
    Title: $("#activity-name").val(),
    SubTitle: "2017-04-30"
  }).then(function (response) {
    console.log(response.data);
    Swal.fire({
      title: " \u65B0\u589E\u6210\u529F!",
      text: '',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  })["catch"](function (error) {
    console.log(error);
  });
});
$('#datepicker').datepicker();
"use strict";

var strHTML = ''; //迴圈暫存字串變數

function ActivityListInit() {
  axios.get("".concat(BaseURl, "Abouts")).then(function (response) {
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

function renderActivityList() {
  strHTML = "";
  axios.get("".concat(BaseURl, "Abouts")).then(function (response) {
    console.log(response.data);
    ActivityRender(response.data);
  });

  function ActivityRender(aryData) {
    var List = document.querySelector(".ActivityTbl tbody");
    aryData.forEach(function (o) {
      strHTML += "\n             <tr>\n                <th scope=\"row\">1</th>\n                <td>".concat(o.Title, "</td>\n                <td></td>\n                <td>").concat(o.SubTitle, "</td>\n                <td>                       \n                    <button class=\"btn btn-info\">\u7DE8\u8F2F</button> | \n                    <button class=\"btn btn-danger\">\u7DE8\u8F2F</button></td>\n            </tr>\n\n             ");
    });
    List.innerHTML = strHTML;
  }
}
"use strict";

$(".login").on("click", function () {
  if ($("#useracc").val() == "" || $("#userpwd").val() == "") {
    alert("請輸入帳號或密碼");
    return;
  }

  axios.post("".concat(BaseURl, "login"), {
    "email": $("#useracc").val(),
    "password": $("#userpwd").val()
  }).then(function (response) {
    if (response.status == 200) {
      console.log(response.data);
      saveDataToLocalStorage('_token', response.data.accessToken);
      saveDataToLocalStorage('_user', response.data.user);
      saveDataToLocalStorage('_expire', {
        time: new Date().getTime(),
        expire: expireMins * 60 * 1000
      });
      $(".login").val("登出");
      ShowLoginMessage(response.data.user); // Swal.fire({
      //     title: '新增成功!',
      //     text: '',
      //     icon: 'success',
      //     confirmButtonText: 'OK'
      //   })

      IsLogin = true; // window.location.href = "admin-page.html"

      topMenuInit(); // ShowLoginMessage(response.data.user)
    } else {
      if (response.data == "Email already exists") {
        alert("帳號已存在");
      } else {// alert(response.status)
      }
    }
  })["catch"](function (error) {
    // if(error.response.data=="Email already exists"){
    //     alert("帳號已存在")
    // } else if(error.response.data=="Cannot find user"){
    //     alert("帳號不存在")
    // }else{
    //     alert(error.response.data)
    // }
    alert(error);
  }); // window.location.href = "admin-page.html"
});
$(".signup").on('click', function () {
  axios.post("".concat(BaseURl, "signup"), {
    "email": $("#useracc").val(),
    "password": $("#userpwd").val(),
    "role": ""
  }).then(function (response) {
    if (response.status == 200) {
      alert("註冊成功");
    } else {
      if (response.data == "Email already exists") {
        alert("帳號已存在");
      } else {// alert(response.status)
      }
    }

    console.log(response.data);
  })["catch"](function (error) {
    if (error.response.data == "Email already exists") {
      alert("帳號已存在");
    } else {} // alert(error)

  });
});
$(".mangerDemo").on('click', function () {
  $("#useracc").val("admin@gmail.com");
  $("#userpwd").val("123456");
});
$(".userDemo").on('click', function () {
  $("#useracc").val("user@gmail.com");
  $("#userpwd").val("0000");
});

function topMenuInit() {// if(IsLogin){
  //     $("ul.nav").show()
  // }else{
  //     $("ul.nav").hide()
  // }
}

function saveDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
} //get data from local storage


function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

topMenuInit();
//# sourceMappingURL=all.js.map
