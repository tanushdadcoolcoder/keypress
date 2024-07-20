// Create a reference for the canvas

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() 
{
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploading; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploading() 
{

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	{
		alphabetkey();
		document.getElementById("d5").innerHTML="You pressed Alphabet key";
		console.log("alphabet key");

	}
		if((keyPressed >=127 && keyPressed<=13))
	{
		otherkey();
		document.getElementById("d4").innerHTML="You pressed symbol or other key";
		console.log("other key");
	}
		if((keyPressed >=48 && keyPressed<=57))
	{
		numberkey();
		document.getElementById("d3").innerHTML="You pressed Number key";
		console.log("number key");
	}
		if((keyPressed >=37 && keyPressed<=40))
	{
		arrowkey();
		document.getElementById("d2").innerHTML="You pressed Arrow key";
		console.log("arrow key");
	}
		if((keyPressed >=17 && keyPressed<=18)|| (keyPressed >=27))
	{
		spacialkey();
		document.getElementById("d1").innerHTML="You pressed Spacial key";
		console.log("spacial key");
	}
}

function alphabetkey()
{
	 img_image="Alpkey.png";
	add();
}

function otherkey()
{
	 img_image="otherkey.png";
	add();
}

function numberkey()
{
	 img_image="numkey.png";
    add();
}

function arrowkey()
{
	 img_image="Arrkey.png";
	add();
}
function spacialkey()
{
	 img_image="spkey.png";
	add();
}

	
