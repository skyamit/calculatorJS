var data  = "";
var res = "";
var result = document.getElementById("result");
var output = document.getElementById("output");
var button = document.getElementsByClassName("word");

function update(event){
    var d = this.textContent;
    data += d;
    output.innerHTML = data;
}

for(b of button){
    b.addEventListener('click',update);
}

function calculateResult() {
    res = eval(data);
    result.innerHTML = "= "+res;
}

function reset(){
    data = "";
    output.innerHTML ="";
    result.innerHTML = "";
}

function useResult(){
    output.innerHTML = res;
    data = res;
}