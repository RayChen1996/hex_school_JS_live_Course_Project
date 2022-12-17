let strHTML = '';//迴圈暫存字串變數
let ActivityData = []
function ActivityListInit(){ 
    axios.get(`${BaseURl}Abouts`).then(function(response){
        ActivityRender(response.data)
        ActivityData = response.data
    });
    function ActivityRender(aryData){ 
        const List = document.querySelector(".Activity")
        aryData.forEach(o=>{

             strHTML += `
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <img src="${o.Photo}" class="card-img-top" alt="" >
                    <div class="card-body">
                        <h5 class="card-title">${o.Title}
                        ${o.tag=='最新活動'?"<span class='badge bg-danger'>New</span>":""}
                        
                        
                        </h5>
                        <p class="card-text">${o.SubTitle}</p>
                        <a href="#" onclick='viewDetailActivity(${o.id})' class="btn btn-primary">查看</a>
                    </div>
                    </div>
                </div>
             `

        });
      

        List.innerHTML = strHTML
    }
}

ActivityListInit();


function viewDetailActivity(Id){
 
  const result = ActivityData.filter(obj => obj.id === Id) ;
  result.forEach((item)=>{
      Swal.fire({
          title: ''+item.Title,
          text: ''+item.SubTitle,
          html:`
            
             <p>
             
             ${item.Description}

             </p>
          `,
          imageUrl: ''+item.Photo,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
      })

  })
}

function renderActivityList(){
    strHTML = ""
    axios.get(`${BaseURl}Abouts`).then(function(response){
        console.log(response.data)
        ActivityRender(response.data)
        ActivityData =  response.data
    });

    function ActivityRender(aryData){ 
        const List = document.querySelector(".ActivityTbl tbody")
        aryData.forEach(o=>{
             strHTML += `
             <tr>
                <th scope="row">${o.id}</th>
                <td>${o.Title}</td>
                

                <td>${o.SubTitle}</td>
                <td>${o.CreateDateTime}</td>
                <td>${o.EditDateTime}</td>
                <td>                       
                    <button class="btn btn-info" onclick='EditActivity(${o.id})'  >編輯</button> | 
                    <button class="btn btn-danger" onclick='DelActivity(${o.id})' >刪除</button></td>
            </tr>

             `

        });
      

        List.innerHTML = strHTML
    }

}


function AddActivity(){
    axios.post(`${BaseURl}Abouts`, 
        { 
            "SCH_DATE": "",
            "title": "",
            "note": "",
        }
     )
    .then((res) => { 
        console.table(res.data) 

        Swal.fire(
            '刪除成功!',
            '',
            'success'
          )
          renderActivityList()

    })
    .catch((error) => { 
        console.error(error) 
        Swal.fire(
            '刪除失敗!',
            '',
            'error'
          )


    })
}

function EditActivity(id){
    const result = ActivityData.filter(obj => obj.id === id) ;
    result.forEach((item)=>{
        Swal.fire({
            // title: ''+item.Title,
            text: ''+item.SubTitle,
            imageUrl: ''+item.Photo,
            html:`
              <input type='text' class="form-control" id='chgTitle' value='${item.Title}' />
            `,
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: '儲存',
            imageAlt: 'Custom image',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {


                axios.patch(`${BaseURl}Abouts/${id}`, {
                    Title: $("#chgTitle").val(),
                })
                .then(res => {
                  console.log(res.data);
                  Swal.fire('已儲存！', '', 'success')
                  renderActivityList()


                })
                .catch(function(err){
                    console.log(err)
                });




             
            } else if (result.isDenied) {
              //Swal.fire('', '', 'info')
            }
          })

    })

}


function DelActivity(id){ 

    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      ).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

            axios.delete(`${BaseURl}Abouts/${id}`)
            .then(res => {
            console.log(res.data);
            Swal.fire(
                '刪除成功!',
                '',
                'success'
            )
            renderActivityList()
            
            })
            .catch((error) => { 
                console.error(error) 
                Swal.fire(
                    '刪除失敗!',
                    '',
                    'error'
                )
            });  
         
        } else if (result.isDenied) {
          
        }
      })







}