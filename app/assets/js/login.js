$(".login").on("click",function(){
 
    if($("#useracc").val()=="" || $("#userpwd").val()==""  ){
        alert("請輸入帳號或密碼")
        return;
    }
    axios.post(`${BaseURl}login`,{
        "email":$("#useracc").val(),
        "password":$("#userpwd").val()
    })
    .then( (response) => {
    
        if(response.status == 200){
     
            console.log(response.data)
            saveDataToLocalStorage('_token', response.data.accessToken);
            saveDataToLocalStorage('_user', response.data.user);
            saveDataToLocalStorage('_expire', { time: new Date().getTime(), expire: expireMins * 60 * 1000 });



            $(".login").val("登出")

            ShowLoginMessage(response.data.user)
            // Swal.fire({
            //     title: '新增成功!',
            //     text: '',
            //     icon: 'success',
            //     confirmButtonText: 'OK'
            //   })
            IsLogin = true
            // window.location.href = "admin-page.html"
            topMenuInit()
            
            // ShowLoginMessage(response.data.user)

        }else{



            if(response.data=="Email already exists"){
                alert("帳號已存在")
            }else{
                // alert(response.status)
            }

        }
        
    })
    .catch( (error) => {
        // if(error.response.data=="Email already exists"){
        //     alert("帳號已存在")
        // } else if(error.response.data=="Cannot find user"){
        //     alert("帳號不存在")
        // }else{
        //     alert(error.response.data)
        // }
        alert(error)
    })

    // window.location.href = "admin-page.html"
})


$(".signup").on('click',function(){



    axios.post(`${BaseURl}signup`,{
        "email":$("#reguseracc").val(),
        "password":$("#reguserpwd").val(),
        "role":""
    })
    .then( (response) => {
        if(response.status == 200){
            alert("註冊成功")
        }else{
            
            if(response.data=="Email already exists"){
                alert("帳號已存在")
            }else{
                // alert(response.status)
            }
        }
        console.log(response.data)
     
    })
    .catch( (error) => {
        if(error.response.data=="Email already exists"){
            alert("帳號已存在")
        } else{

        }
        // alert(error)
    })
})



$(".mangerDemo").on('click',function(){
    $("#useracc").val("admin@gmail.com")
    $("#userpwd").val("123456")
})

$(".userDemo").on('click',function(){
    $("#useracc").val("user@gmail.com")
    $("#userpwd").val("0000")
})

function chgMgrAccText(){
    $("#useracc").val("admin@gmail.com")
    $("#userpwd").val("123456")
}

function chgUserAccText(){
    $("#useracc").val("user@gmail.com")
    $("#userpwd").val("0000")
}





function RegisterUser(){
    var constraints = {
        username: {
          presence: true,
          exclusion: {
            within: ["nicklas"],
            message: "'%{value}' is not allowed"
          }
        },
        password: {
          presence: true,
          length: {
            minimum: 6,
            message: "密碼字元必須大於4位數"
          }
        }
      };

    if(validate({username:$("#reguseracc").val(),password: $("#reguserpwd").val() }, constraints)){
        console.log("註冊成功")
    }else{
        console.log("註冊失敗")
    }
 
    axios.post(`${BaseURl}signup`,{
        "email":$("#reguseracc").val(),
        "password":$("#reguserpwd").val(),
        "role":""
    })
    .then( (response) => {
        if(response.status == 200){
            alert("註冊成功")
        }else{
            
            if(response.data=="Email already exists"){
                alert("帳號已存在")
            }else{
                // alert(response.status)
            }
        }
        alert(response.data)
        console.log(response.data)
     
    })
    .catch( (error) => {
        if(error.response.data=="Email already exists"){
            alert("帳號已存在")
        } else{

        }
        // alert(error)
    })
}


function Login(){
    if($("#useracc").val()=="" || $("#userpwd").val()==""  ){
        alert("請輸入帳號或密碼")
        return;
    }
    axios.post(`${BaseURl}login`,{
        "email":$("#useracc").val(),
        "password":$("#userpwd").val()
    })
    .then( (response) => {
        if(response.status == 200){
            saveDataToLocalStorage('_token', response.data.accessToken);
            saveDataToLocalStorage('_user', response.data.user);
            saveDataToLocalStorage('_expire', { time: new Date().getTime(), expire: expireMins * 60 * 1000 });

            $(".login").val("登出")
            ShowLoginMessage(response.data.user)
            // Swal.fire({
            //     title: '新增成功!',
            //     text: '',
            //     icon: 'success',
            //     confirmButtonText: 'OK'
            //   })
            IsLogin = true
            window.location.href = "admin-Welcome.html"
            topMenuInit()
            
            // ShowLoginMessage(response.data.user)

        }else{
            if(response.data=="Email already exists"){
                alert("帳號已存在")
            }else{
                // alert(response.status)
            }

        }
        
    })
    .catch( (error) => {
        // if(error.response.data=="Email already exists"){
        //     alert("帳號已存在")
        // } else if(error.response.data=="Cannot find user"){
        //     alert("帳號不存在")
        // }else{
        //     alert(error.response.data)
        // }
        alert(error)
    })
}

function topMenuInit(){
    // if(IsLogin){
    //     $("ul.nav").show()
    // }else{
    //     $("ul.nav").hide()
    // }
}


function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
//get data from local storage
function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

topMenuInit()