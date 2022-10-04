
document.getElementById("burgers").style="display:block;"

function burgersBtn(){
	document.getElementById("burgers-btn").className="js-btn .active-btn";
	document.getElementById("sides-btn").className="js-btn .btn-brws";
	document.getElementById("drinks-btn").className="js-btn .btn-brws";
	document.getElementById("burgers").style="display:block;";
	document.getElementById("sides").style="display:none; background-color:white;";
	document.getElementById("drinks").style="display:none; background-color:white;";
}

function sidesBtn(){
	document.getElementById("sides-btn").className="js-btn .active-btn";
	document.getElementById("burgers-btn").className="js-btn .btn-brws";
	document.getElementById("drinks-btn").className="js-btn .btn-brws";
	document.getElementById("sides").style="display:block;";
	document.getElementById("burgers").style="display:none;";
	document.getElementById("drinks").style="display:none;";
}

function drinksBtn(){
	document.getElementById("drinks-btn").className="js-btn .active-btn";
	document.getElementById("burgers-btn").className="js-btn .btn-brws";
	document.getElementById("sides-btn").className="js-btn .btn-brws";
	document.getElementById("drinks").style="display:block;";
	document.getElementById("burgers").style="display:none;";
	document.getElementById("sides").style="display:none;";
}

function navToggle(){
	document.getElementById("nav-links").style="display:block;";
	document.getElementById("nav-links").onclick="navToggleDown()";
}

function navToggleDown(){
	document.getElementById("nav-links").style="display:none;";
	document.getElementById("nav-links").onclick="navToggle";
}