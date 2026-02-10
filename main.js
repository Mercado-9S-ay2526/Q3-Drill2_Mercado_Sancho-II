function multiply(){
    let pi = Math.PI;
    let rad = document.getElementById("rad").value;
    let r = rad ** 2;
    let ans = Number(pi) * Number(r);
    document.getElementById("area").innerHTML = "Area: " + ans;
}
