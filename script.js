let boxEl=document.getElementById("box")
let btnEl=document.getElementById("btn")
let btn1El=document.getElementById("btn1")
let lengthEl=document.getElementById("length")
let volumeEl=document.getElementById("volume")
let weightEl=document.getElementById("weight")
let arr
btnEl.addEventListener("click",function(){
    arr=boxEl.value
   
    print(arr)
   
})

function print(arr){
    let x=`${arr} meters = ${(arr*3.28084).toFixed(2)} feet | ${arr} feet = ${(arr*0.3048).toFixed(2)} meter `
lengthEl.innerHTML=x
let y=`${arr} Litres = ${(arr*0.264172).toFixed(2)} gallons | ${arr} gallon = ${(arr*3.78541).toFixed(2)} liters `
volumeEl.innerHTML=y

let z=`${arr} kilograms = ${(arr*2.20462).toFixed(2)} pounds | ${arr} pounds = ${(arr*0.453592).toFixed(2)} kilograms `
weightEl.innerHTML=z
}

btn1El.addEventListener("click",function(){
    lengthEl.innerHTML=""
    volumeEl.innerHTML=""
    weightEl.innerHTML=""
    boxEl.value=""
})