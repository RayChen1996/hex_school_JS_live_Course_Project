let strHTML = '';//迴圈暫存字串變數
function ActivityListInit(){
    axios.get(`${BaseURl}Abouts`).then(function(response){
        console.log(response.data)
        ActivityRender(response.data)
    });
    function ActivityRender(aryData){ 
        const List = document.querySelector(".Activity")
        aryData.forEach(o=>{

             strHTML += `
                <div class="col">
                    <div class="card" style="width: 18rem;">
                    <img src="${o.Photo}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${o.Title}</h5>
                        <p class="card-text">${o.SubTitle}</p>
                        <a href="#" class="btn btn-primary">查看</a>
                    </div>
                    </div>
                </div>
             `

        });
      

        List.innerHTML = strHTML
    }
}

ActivityListInit();


function renderActivityList(){
    strHTML = ""
    axios.get(`${BaseURl}Abouts`).then(function(response){
        console.log(response.data)
        ActivityRender(response.data)
    });

    function ActivityRender(aryData){ 
        const List = document.querySelector(".ActivityTbl tbody")
        aryData.forEach(o=>{

             strHTML += `


             <tr>
                <th scope="row">1</th>
                <td>${o.Title}</td>
                <td></td>
                <td>${o.SubTitle}</td>
                <td>                       
                    <button class="btn btn-info">編輯</button> | 
                    <button class="btn btn-danger">編輯</button></td>
            </tr>

      
             `

        });
      

        List.innerHTML = strHTML
    }

}
