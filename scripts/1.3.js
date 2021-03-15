let elem = document.getElementById("inp");
let elem2 = document.getElementById("sel");
let val, previosInd;

elem.oninput = function(){
    val = elem.value;
    previosInd = elem2.options.selectedIndex;
}

elem2.onchange = function () {
    let selInd = elem2.options.selectedIndex;


    if(selInd < previosInd && previosInd != 0 && selInd != 0){
        val = val*Math.pow(1024,(previosInd - selInd));
        elem.value = val;
    } else if(selInd > previosInd && previosInd != 0 && selInd != 0){
        val = val/Math.pow(1024,(selInd-previosInd));
        elem.value = val;
    }else if(selInd < previosInd && previosInd != 0 && selInd == 0){
        val = val* 8 * Math.pow(1024,(previosInd - selInd - 1));
        elem.value = val;
    } else if(selInd > previosInd && previosInd == 0 && selInd != 0){
        val = val/ (8 * Math.pow(1024,(selInd - previosInd - 1)));
        elem.value = val;
    }
    previosInd = selInd;


}
