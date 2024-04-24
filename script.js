const city=document.querySelector(".city");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const searchinput=document.querySelector(".search input");
const searchbtn=document.querySelector(".btn ")



const apikey="ad8bfb6a6c270ca90f6c6d8baacd3963";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";
async function checkweather(searchcity){
    const response= await fetch(apiurl+`&q=${searchcity}`+`&appid=${apikey}`);
   if(response.status==404){
    document.querySelector(".error").style.display="block";
   }
   else{ var data= await response.json();
    const temperature=Math.floor(data.main.temp);
    city.innerHTML=data.name;
    temp.innerHTML=temperature+"°C";
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+" km/h";}
   
   
};

searchbtn.addEventListener("click",()=>{
    checkweather(searchinput.value)
})
