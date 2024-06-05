function calc() {
    var v1 = parseInt(document.getElementById("val1").value);
    var v2 = parseInt(document.getElementById("val2").value);
    var sum = document.getElementById("sum");
    var diff = document.getElementById("diff");
    var prod = document.getElementById("prod");
    var div = document.getElementById("div");
    sum.innerText = v1 + v2;
    diff.innerText = v1 - v2;
    prod.innerText = v1 * v2;
    div.innerText = v1 / v2;
}
