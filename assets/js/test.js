const myAppElement = document.getElementById('myApp');

let myPage = 1;  // eto budet tilko odna stranica 

//entry point 

loadinSreen();
setUpShowAllButton();
setupSearchForm();
fetchOneCharacter(4703);
//Loading Screen kaldes når vi henter data
function fetchOneCharacter(myId) {// v myId nahodyatsya 4703 elelmentov
    let URI =  `https://api.disneyapi.dev/characters/${myId}`  //Template strings(s dolloroy i skobki)
    fetch(URI)                           //eto ti ishesh API
    .then((response) =>{                          
        // console.log(response);
        if(response.ok){
        return response.json();
        }
    
    else{
        alert("api error du får lige mickey mouse");
        fetchOneCharacter(4703);
         }
})
    .then((data)=>{
        // console.log(data);
        showCharacter(data,mySender);
})
    .catch((error) =>{
        console.error(error.massage);
});
    }

function showCharacter(myData,mySender){
    //myAppElement
    console.log(myData.name);
    let myFilms = '<h3>Films:</h3>';
    myData.films.map((film)=>{
        myFilms +=`${film},`
    });

    let myTvShows = '<h3>Tv Shows:</h3>';
    myData.myTvShows.map((show)=>{
        myTvShows +=`${show},`
    });

    let myHtml = `<h2>${myData.name}</h2> <img src="${myData.imgeUrl}"><p>${myFilms}</p>`;   //Template strings(s dolloroy i skobki)

    myAppElement.innerHTML = myHtml;
}




// loading screen  kaldes når vi henter data
function loadinSreen() {
    myAppElement.innerHTML ="<h2>Loading...</h2>";
}
// knappen i Dom med Id 

function setUpShowAllButton(){
    let showAllButton = document.getElementById('showAllButton')
    showAllButton.addEventListener('click', (e) => {
        myPage = 1;
    fetchOneCaracterPage();
    });
}
// Tut nachinaetsya kodi katoiy svyazana s knopkoy koda ti pishesh ili pustoy 
function setupSearchForm() {
   
    let searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', (e)=> {
        e.preventDefault();  // net ne obnovlyat stranicu 
        let searchInput = document.getElementById('searchInput');
        let myValue = searchInput.value;
            if(myValue){
                console.log('vi har string' + myValue); //eto pokazivaet kogda ti ispolzoval e.preventDefault
            }
            else{
                alert('indtast i søge felt.');  // eto kogda ti najimaesh na knopku i okno otkrivaetsya gde ti doljen napisat
            }

    });
}

function fetchCaracterPage() {
    console.log('fetchCaracterPage');
}
    
