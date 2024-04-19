let x;

console.log(document);

document.getElementById("text").onclick = function(){
    x= Math.floor(Math.random() * 50);
    document.getElementById("san").innerHTML = x;
};
x=alert("Тап")=32