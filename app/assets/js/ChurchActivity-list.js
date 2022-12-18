let strHTML = '';//迴圈暫存字串變數
let ActivityData = []
function ActivityListInit(tag){ 
    axios.get(`${BaseURl}Abouts`).then(function(response){
        if(tag==undefined){
            ActivityRender(response.data)            
            ActivityData = response.data
        }else{
            const result = ActivityData.filter((el)=> el.tag == tag )
            ActivityRender(result)   
        }
    });
    function ActivityRender(aryData){ 
        const List = document.querySelector("#shop")
    
        aryData.forEach((p,idx) =>{
             strHTML += `        

                <div id="keyBoard" class="col-md-4 mt-2">
                    <div class="card" style="width: 18rem;">
                        <img src="${p.Photo}" class="card-img-top img-fluid" alt="keyboard">
                        <div class="card-body">
                            <h5 class="card-title" id="itemName">${p.Title}
                            ${p.tag=='最新資訊'?"<span class='badge bg-danger'>New</span>":""}
                            </h5>
                            <p class="card-text" id="itemDesc">${p.SubTitle}</p>
                         
                            <a href="#" onclick='viewDetailActivity(${p.id})'  class="btn btn-primary" id="addCart">查看</a>
                            ${p.tag=='最新資訊'?"<a href='#' onclick='viewDetailActivity(${p.id})'  class='btn btn-outline-primary' id='gotoCart>報名！</a>":""}
                        </div>
                    </div>
                </div>


             `
        });
        List.innerHTML = strHTML

        
    }
}

function ShowFilterResult(tag){
    let result = []
    if(tag==="all"){
        result = ActivityData
    }else{
        result = ActivityData.filter((el)=> el.tag == tag )
    }
    
    strHTML = ""
    ActivityRender(result)
 
    function ActivityRender(aryData){ 
        console.log(aryData)
        const List = document.querySelector("#shop")
  
        aryData.forEach(p=>{
             strHTML += `            
                <div id="keyBoard" class="col-md-4 mt-2">
                    <div class="card" style="width: 18rem;">
                        <img src="${p.Photo}" class="card-img-top img-fluid" alt="keyboard">
                        <div class="card-body">
                            <h5 class="card-title" id="itemName">${p.Title}
                            ${p.tag=='最新資訊'?"<span class='badge bg-danger'>New</span>":""}
                            </h5>
                            <p class="card-text" id="itemDesc">${p.SubTitle}</p>
                        
                            <a href="#" onclick='viewDetailActivity(${p.id})'  class="btn btn-primary" id="addCart">查看活動</a>
                            ${p.tag=='最新資訊'?"<button type=button onclick=viewDetailActivity(${p.id})  class='btn btn-success'>立即報名！</button>":""}

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
  console.log(Id)
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
          confirmButtonText:"確定",
          imageAlt: 'Custom image',
      })

  })
}


//管理者頁面
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
                
                <td>2022-12-18</td>
                <td> </td>
                <td>                       
                    <button class="btn btn-info" onclick='EditActivity(${o.id})'  >編輯</button> | 
                    <button class="btn btn-danger" onclick='DelActivity(${o.id})' >刪除</button></td>
            </tr>

             `

        });
      

        List.innerHTML = strHTML
    }

}



function renderPayList(){
    strHTML = ""
    axios.get(`${BaseURl}Dedication`).then(function(response){
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
                <td>${o.title}</td>
                

                <td>${o.Name}</td>
                <td>${o.Money}</td>
                <td></td>
                <td></td>
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

    Swal.fire({
        icon: 'error',
        title: '確認刪除?',
        text: '',
        confirmButtonText:
        '確定',
    }).then((result) => {
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

