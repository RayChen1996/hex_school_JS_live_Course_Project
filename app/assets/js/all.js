const BaseURl = `https://json-server-vercel-seven.vercel.app/`
//https://json-server-vercel-a.vercel.app

// const BaseURl = `http://localhost:3000/`
const logo = document.querySelector(".logo");
const expireMins = 30; //登入過期時間(分鐘)
let IsLogin = false


function ShowLoginMessage(user){


  swal(`Hello ${user} Success`);
}

function CheckLogin(){
  setInterval(function(){
    if(IsLogin){
      // Swal.fire(
      //   '成功登入！',
      //   '',
      //   'success'
      // )


      Swal.fire({
        title: '新增成功!',
        text: '',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      $("ul.nav").show()
    }else{


      // $("ul.nav").hide()
    }
  },1000);
}



CheckLogin()