 

$(".postArticle").on("click",function(){
 
    axios.post(`${BaseURl}Abouts`,{
        tag: $("#activity-type").val(),
        Photo:'https://github.com/RayChen1996/js_hex_project-seed-church/blob/main/img/LINE_ALBUM_20161224%E7%A8%AE%E5%AD%90%E6%95%99%E6%9C%83%E8%81%96%E8%AA%95%E5%A4%9C%E7%9B%B8%E7%89%87_221127.jpg?raw=true',
        Title: $("#activity-name").val(),
        SubTitle:"",
        DateTime:""
    })
        .then( (response) => {
            console.log(response.data)

            Swal.fire({
                title: ` 新增成功!`,
                text: '',
                icon: 'success',
                confirmButtonText: 'OK'
              })


              renderActivityList()
        })
        .catch( (error) => {
            console.log(error)
        })
})


$(".postPayment").on("click",function(){
   
    axios.post(`${BaseURl}Dedication`,{
        Name: $("#pay-name").val(),
        SCH_DATE:$("#pay-money").val(),
        note: $("#pay-context").val(),
        title:$("#pay-name").val(),
        Money:$("#pay-money").val()
    })
        .then( (response) => {
            console.log(response.data)

            Swal.fire({
                title: ` 新增成功!`,
                text: '',
                icon: 'success',
                confirmButtonText: 'OK'
              })


              renderPayList()
        })
        .catch( (error) => {
            console.log(error)
        })
})

$('#datepicker').datepicker();