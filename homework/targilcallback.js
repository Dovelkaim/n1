/*
//targil1
function nom(rename){
    console.log(rename)
}
function cool(callback){
    callback("dov")
}
cool(nom)
//targil3
function printNum(num){
    console.log(num)
}
function nice(callback){
    callback(42)
}
nice(printNum)
//targil4
function amazing(callback){
    const num = callback(42,128,37,81,66)
    console.log("Num:"+num)
}
function t(x1,x2,x3,x4,x5){
    let num= Math.floor(Math.random()*5)
    let arr = [x1,x2,x3,x4,x5]
    return arr[num]
}
amazing(t)
//targil5
function randomColor(color){
    let num = Math.floor(Math.random()*4)
    let arr = ["yellow","blue","red","green"]
    console.log(arr[num])
    return arr[num]
}
function cool(paintCallback){
    paintCallback()
}
cool(randomColor)
//targil6
function randomColor(color){
    let num = Math.floor(Math.random()*3)
    let arr = ["blue","red","green"]
    console.log(arr[num])
    document.body.style.background = arr[num]
    return arr[num]
}
function cool(paintCallback){
    paintCallback()
}
cool(randomColor)
setInterval(randomColor, 2000)
//targil7
function salome(number){
    let num= Math.floor(Math.random()*100)+1
    console.log(num)
}
function amazing(callback){
    callback()
}
setInterval(salome, 1000)
//targil8
function salome(color){
    let couleur = ["green","white","purple"] 
    let num = Math.floor(Math.random()*3)
    console.log(couleur)
    document.body.style.background = couleur[num]
    return couleur[num]
}
function amazing(callback){
    callback()
}

setInterval(salome, 1000)
//targil9
function salomeEtDov(number){
    let arr = []
    for(let i = 0;i<100;i++){
        let num = Math.floor(Math.random()*100)+1
        arr.push(num)
    }
    console.log(arr)
}
setInterval(salomeEtDov)
*/