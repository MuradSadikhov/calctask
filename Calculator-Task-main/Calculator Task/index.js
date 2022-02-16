let operationh = document.getElementById("operationh");
let resulth = document.getElementById("resulth");
let count;
let darkMode=document.getElementById("darkMode");
let part2=document.getElementById("part2");
let part1=document.getElementById("part1");



function Digits(num) {
    operationh.innerHTML+=num;
    count++;
}

function Operator(ope) {
    if(count!=0){
        operationh.innerHTML+=ope;
    }
}


function Clear() {
    operationh.innerHTML = null;
    resulth.innerHTML = null;
}


function Equal() {
    try {
        
        resulth.innerHTML=eval(operationh.innerHTML);

    } catch (error) {
        
    }

    count=null;
}

q

function DarkMode(){
    part2.style.backgroundColor="black";
    part1.style.backgroundColor="black";
}