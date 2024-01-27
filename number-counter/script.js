let valueDisplays = document.querySelectorAll(".num");
let interval = 300;

valueDisplays.forEach(value =>{
    let startValue = 0;
    let endValue = parseInt(value.getAttribute("data-val"));

     let duration = Math.floor(interval / endValue);
     let counter = setInterval(()=>{
        startValue += 1;
        value.textContent = startValue;
        if(startValue === endValue){
            clearInterval(counter)
        }
     }, duration)
})