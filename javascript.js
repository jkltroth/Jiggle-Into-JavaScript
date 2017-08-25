document.getElementById("button1").addEventListener("click", function(){
	document.getElementById("box").style.height = "300px";
	document.getElementById("box").style.width = "300px";
	document.getElementById("nameDisplay").style.lineHeight = "300px";
});

document.getElementById("button2").addEventListener("click", function(){
	document.getElementById("box").style.backgroundColor = "DeepSkyBlue";
});

document.getElementById("button3").addEventListener("click", function(){
	document.getElementById("box").style.opacity = "0.25";
});

document.getElementById("button4").addEventListener("click", function(){
	document.getElementById("box").style.borderStyle = "double";
	document.getElementById("box").style.borderWidth = "15px"
	document.getElementById("box").style.borderColor = "purple";
	document.getElementById("box").style.borderRadius = "12px";
	document.getElementById("nameDisplay").style.lineHeight = "105px";
});

document.getElementById("button5").addEventListener("click", function(){
	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.opacity = "1";
	document.getElementById("box").style.border = "none";
	document.getElementById("box").style.borderRadius = "0px";
	document.getElementById("nameDisplay").innerHTML = "";
	document.getElementById("nameDisplay").style.lineHeight = "150px";
});

document.getElementById("button6").addEventListener("click", function(){
	var x = document.getElementById("nameInput").value;
	document.getElementById("nameDisplay").innerHTML = x;
});
