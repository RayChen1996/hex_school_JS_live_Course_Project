const BaseURl = `https://json-server-vercel-seven.vercel.app/`


$(document).ready(() => {

  //GET請求
axios.get(`${BaseURl}DailyBibles`)
.then( (response) => console.log(response))
.catch( (error) => console.log(error))

 

axios.get(`${BaseURl}Abouts`)
.then( (response) => console.log(response))
.catch( (error) => console.log(error))



axios.get(`${BaseURl}Historys`)
.then( (response) => console.log(response))
.catch( (error) => console.log(error))



axios.get(`${BaseURl}Schedules`)
.then( (response) => console.log(response))
.catch( (error) => console.log(error))



//users

axios.get(`${BaseURl}users`)
.then( (response) => console.log(response))
.catch( (error) => console.log(error))


});