function licenseValid() {
    console.log("-------------------------------------");
    var age = parseInt(document.getElementById("age").value);
    var msg = "";

    try {
        if(age<16) throw new Error("No license for underage")
        else if(age<18) msg+="Eligible for Gearless License";
        else msg+="Eligible for Normal License";
    } catch (error) {
        msg+=error.message;
    }


    // alert(msg);
    // console.log(msg);
    

    document.getElementById("result").innerHTML = msg;
}