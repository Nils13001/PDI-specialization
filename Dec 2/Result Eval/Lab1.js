function evalResult() {
    console.log("-------------------------------------");
    var html = parseFloat(document.getElementById("html").value);
    var css = parseFloat(document.getElementById("css").value);
    var python = parseFloat(document.getElementById("python").value);

    var result = html+css+python;

    var percentage = result/3;

    var msg = `Result is ${result}/300<br>Percentage is ${percentage}%<br>`;

    if(percentage>=90) msg+=`Grade is A`;
    else if(percentage>=80) msg+=`Grade is B`
    else msg+=`Failed!!!`

    // alert(msg);
    // console.log(msg);
    

    document.getElementById("result").innerHTML = msg;
}