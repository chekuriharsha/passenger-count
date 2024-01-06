let count = 0;
function Increment(){
    if(count<50){
        count=count +1;
        window.document.getElementById('pc-display-box').innerHTML=`Count: ${count}`;
    }
    else{
        window.document.getElementById('pc-display-box').innerHTML=`Count: Exceeded`;
    }
}
function Decrement(){
    if(count>0){
        count = count -1;
        window.document.getElementById('pc-display-box').innerHTML=`Count: ${count}`;
    }
    else{
        window.document.getElementById('pc-display-box').innerHTML=`Count: Invalid`;
    }
}
function Reset(){
    count = 0;
    window.document.getElementById('pc-display-box').innerHTML=`Count: ${count}`;
}