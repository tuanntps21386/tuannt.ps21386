var arrFPT = [];
var n=5;
var ind = 0;
function loadAnh(){
    for(var i= 0; i<n; i++){
        arrFPT[i] = new Image();
        arrFPT[i].src = "./img/slide1" + i + ".jpg";

    }
}

function next(){
    if(ind < arrFPT.length){
        ind++;
        var Hoa = document.getElementById("anchor");
        Hoa.src = arrFPT[ind].src;
    }
}

function back(){
    if(ind > 0){
        ind--;
        var Hoa = document.getElementById("anchor");
        Hoa.src = arrFPT[ind].src;
    }
}