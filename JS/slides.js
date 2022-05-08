let count = 1

document.getElementById("radio1").checked = true

setInterval( function(){
    nextSlide()
}, 3000)

function nextSlide(){
    count++
    if(count > 3){
        count = 1
    }
    document.getElementById("radio"+count).checked = true
}