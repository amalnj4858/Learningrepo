var c1 = document.getElementById('color1');
var c2 = document.getElementById('color2');
var body = document.getElementById('bd');
var h3 = document.getElementById("hello");

h3.innerHTML = "hi";
h3.innerHTML = body.style.background;
function changeColor(){
	body.style.background = "linear-gradient(to right, " + c1.value + ", " + c2.value+")";
	h3.innerHTML = body.style.background;
	
}

c1.addEventListener("input",changeColor);
c2.addEventListener("input",changeColor);

