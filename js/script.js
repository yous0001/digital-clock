let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")
let day=document.getElementById("day")
let month=document.getElementById("month")
let year=document.getElementById("year")
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let mode=document.getElementById("mode")

setInterval(()=>{
    let Time= new Date()

    hours.innerHTML=(Time.getHours()>12&&mode.checked)?(((Time.getHours()-12)<10?"0":"")+(Time.getHours()-12)):(Time.getHours()<10?"0":"")+Time.getHours();
    minutes.innerHTML=(Time.getMinutes()<10?"0":"")/*to put zero when time is one digit to make clock stay in 2 digits*/+Time.getMinutes()
    seconds.innerHTML=(Time.getSeconds()<10?"0":"")+Time.getSeconds()
    day.innerHTML=Time.getDay()
    month.innerHTML= months[Time.getMonth()];
    year.innerHTML=Time.getFullYear()
},1000)






