let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")

setInterval(()=>{
    let Time= new Date()

    hours.innerHTML=Time.getHours()
    minutes.innerHTML=Time.getMinutes()
    seconds.innerHTML=Time.getSeconds()
    
},1000)

let Time= new Date()

hours.innerHTML=Time.getHours()
minutes.innerHTML=Time.getMinutes()
seconds.innerHTML=Time.getSeconds()

