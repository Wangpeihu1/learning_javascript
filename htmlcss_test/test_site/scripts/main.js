/*
Everythings in between is a comment.

var myHeading = document.getElementsByTagName('h1')[0];
myHeading.innerHTML = 'Hello World!'
*/
var myImage = document.getElementsByTagName('img')[0];

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/123.jpg'){
		myImage.setAttribute('src','images/456.jpg');
	} else {
		myImage.setAttribute('src','images/123.jpg');
	}
}
var myButton = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];
function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Mozilla is cool,'+myName;
}
if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool,'+storedName;
}
myButton.onclick = function(){
	setUserName();
}