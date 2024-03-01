let main = document.querySelector('.main');
let circle = document.getElementById("circle");
let text = document.getElementById("text");


console.log(main,circle)
let online = true;
circle.addEventListener('click',function(){
    if(online){
        circle.classList.add('dark-mode');
    main.style.backgroundColor = "black";
    text.style.color="white";
    online=false;
    }
    else{
        circle.classList.remove('dark-mode');
        main.style.backgroundColor = "white";
        text.style.color="black";
        online=true;
    }
})