//tag selector exp13
function countExp(){
	let data = document.getElementsByTagName('p');
	alert(data.length);
}

//tag selector exp12
function tagExp(){
	document.getElementsByTagName('p')[2].innerHTML="www.gsmarena.com";
}

//class selector exp11
function classExp(){
	document.getElementsByClassName('p')[1].innerHTML="It's me SHOVON";
}

//comparison exp10
let numb1, numb2, resu;
numb1 = 55;
numb2 = 10;
resu = numb1 > numb2;

function comparisonOp(){
	document.getElementById('comparison').innerHTML= resu;
}

//manipulation exp9
let num1, num2, res;
num1 = 55;
num2 = 10;
res = num1 * num2;

function m2Data(){
	document.getElementById('m2').innerHTML="The sum of the number1 + number2 is: " + res;
}

//manipulation exp8
var number1 = 10;
var number2 = 5;
var result = number1 + number2;

function mData(){
	document.getElementById('m').innerHTML="The sum of the number1 + number2 is: " + result;
}

//repeat text exp7
function repeatText(){
	var data = "Welcome to my WORLD!...";
	document.getElementById('rt').innerHTML=data.repeat(3);
}

//show/hide text exp6
function textShow(){
	document.getElementById('sh').style.display="block";
}
function textHide(){
	document.getElementById('sh').style.display="none";
}

// change style exp5
function changeStyle(){
	document.getElementById('cs').style.color="red";
}

//on-off the bulb exp4
function bulbOn(){
	document.getElementById('bulb').src="images/on.gif";
}
function bulbOff(){
	document.getElementById('bulb').src="images/off.gif";
}

// show date exp3
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}

// change text exp2
function changeText(){
	document.getElementById('ct').innerHTML="Smooth Criminal";
}

// show text exp1
function showText(){
	document.getElementById('st').innerHTML = "Stay away from me!";
}

