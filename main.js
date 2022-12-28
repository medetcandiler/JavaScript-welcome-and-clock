function istek(){
    let userName=prompt("Lütfen İsminizi Giriniz","örnek: Medet")
    if (isNaN(userName)) {
        let writeName=document.querySelector("#username")
        writeName.innerHTML= userName
    }else {
        alert("Lütfen isminizi karakterleri kullanarak yeniden giriniz!")
    }
}

function update(){  // counter date
    let d=new Date();  // simplify the new Date()  
    let todayTime=document.querySelector("#time")  // reach the element which is name #time 
    todayTime.innerHTML= ` ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`  // declared hours/minutes/ seconds 
    let days=["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"] //array of days 
    let todayDay=document.querySelector("#day") //reach the element which is name #day 
    todayDay.innerHTML= ` ${days[d.getDay()]}` // declared day 
}
let myInterval= setInterval(update, 1000) // thanks to setInterval our function runs every 1000ms 

  // small practice of declaring dates with setInternal function 
// let output=document.querySelector("#output")
// function update(){
//     let d=new Date();
//     output.innerHTML = ` Year - ${d.getFullYear()}  <br> Month - ${d.getMonth()} <br> Day - ${d.getDay()} <br> Hour - ${d.getHours()} <br> Minutes - ${d.getMinutes()} <br> Seconds - ${+d.getSeconds()}`
// }
// window.addEventListener("load", function(){
//     setInterval( update, 1000)
// } )
