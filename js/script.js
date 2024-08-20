let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")

setInterval(()=>{
    let Time= new Date()

    hours.innerHTML=(Time.getHours()<10?"0":"")/*to put zero when time is one digit to make clock stay in 2 digits*/+Time.getHours()
    minutes.innerHTML=(Time.getMinutes()<10?"0":"")+Time.getMinutes()
    seconds.innerHTML=(Time.getSeconds()<10?"0":"")+Time.getSeconds()
    
},1000)

let Time= new Date()

hours.innerHTML=Time.getHours()
minutes.innerHTML=Time.getMinutes()
seconds.innerHTML=Time.getSeconds()

