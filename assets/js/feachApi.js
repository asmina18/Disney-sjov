
fetch("https://jsonplaceholder.typicode.com/users",{
    method:'POST',
    headers:{
        'content-Type': 'application/json'
    },

    body: JSON.stringify({
        title:"hej Bo ya hochu ponyat pochemu mi polzuemsya content.type'application/json?"
    })
})
.then((res) => res.json())

.then((resData) => console.log(resData))











// method:'PUT',
// headers:{
//    "Content-type":  "application/json"
// },
// body: JSON.stringify({
//     id:1,
//     name :"mary"
// })
// })










    //.then (res=> console.log(res))   //vizivaesh metod json 
    // .then (res =>{
    //     if(res.ok){    // serves ok true  
    //        return res.json ()//vernet Farmate v jsone
           

    //     } else{
    //         console.log("ERROR")
    //         throw ERROR   // eto ti peredaesh na catch
    //     }
    // })
    // .then(res =>res.json())// dobavim chto u nas est noviy polzovatel 
    // .then( data=>
    //     document.getElementById('form').innerHTML = 
    //     JSON.stringify (data) 
    //     )
    //     .catch(error => {  // poluchit oshibku obrabativat oshibku 
    //         console.log(error)
    //     })



//console.log(fetch ("https://jsonplaceholder.typicode.com/users"))








//  fetch ('https://reqres.in/api/users')
//     .then(Response =>Response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))


 










// form.addEventListener('submit', function(e){
//     //auto submision af te form 

//     e.preventDefault()
//     let name = document.getElementById('name').value
//     let body = document.getElementById('body').value
//     let id = document.getElementById('id').value

// })
