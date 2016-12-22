var imageArray = [];
var gLength;
var imagePanel = document.getElementById("imagePanel");
var imageContainer = document.getElementById("imageContainer");
var imageTop = document.createElement("img");
var imageNext = document.createElement("img");
var galleryIndex;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;   
var iWidth; 
var iHeight; 

function loadGallery() {
	// imageArray = document.getElementsByClassName("img");	
	// gLength = imageArray.length;

	galleryIndex = 1;

	 gLength = 4; //This is temporary until I work out how to load the array. 
	 for (i=0;i<gLength;i++) {
	 	imageArray[i] = "images/(" + (i + 1) + ").png";
	 }

	imagePanel.style.height = (winHeight - 50) + "px";
	imagePanel.style.width = "100%";

	imagePanel.appendChild(imageTop);
	imageTop.setAttribute("class", "img");
	imageTop.setAttribute("src", "images/(" + galleryIndex + ").png");
}

imageTop.onload = function() {
	resize();
};

function resize() {
	iWidth = imageTop.naturalWidth;
	iHeight = imageTop.naturalHeight;	

	// imageTop.style.width = iWidth;
	// imagePanel.style.height = iHeight;

	var widerThanWindow = false;
	var tallerThanWindow = false;
	var resizedHeight;
	var topMargin;
	var resizedWidth;
 	var leftMargin;

	imageTop.style.marginTop = "0px"; //resets the margin
	imageTop.style.marginLeft = "0px";

	if (iWidth > winWidth) {
		widerThanWindow = true;
		console.log("Wider");
		// If the pic is wider than window
	}

	if (iHeight > winHeight) {
		tallerThanWindow = true;
		console.log("Taller");
		//if it's taller
	}

	if (widerThanWindow == true && tallerThanWindow == false) {
		imageTop.style.width = "100%";
		imagePanel.style.height = "auto";
		resizedHeight = imageTop.height;
		topMargin = winHeight - resizedHeight - 50;
		imageTop.style.marginTop = (topMargin / 2) + "px";
	}

	if ((widerThanWindow == false && tallerThanWindow == true)) {
		imageTop.style.width = "";
		imagePanel.style.height = (winHeight - 50) + "px";
	 	imageTop.style.height = "100%"

	 	resizedWidth = imageTop.width;
		leftMargin = winWidth - resizedWidth;
		imageTop.style.marginLeft = (leftMargin / 2) + "px";
	}

	if (widerThanWindow == true && tallerThanWindow == true) {
		// find which is bigger, then resize around that axis

		if (iWidth > iHeight) {
			imageTop.style.width = "";
			imagePanel.style.height = (winHeight - 50) + "px";
		 	imageTop.style.height = "100%"
		}

		if (iHeight > iWidth) {
			imageTop.style.width = "100%";
			imagePanel.style.height = "auto";
			resizedHeight = imageTop.height;
			topMargin = winHeight - resizedHeight - 50;
			imageTop.style.marginTop = (topMargin / 2) + "px";

			resizedWidth = imageTop.width;
			leftMargin = winWidth - resizedWidth;
			imageTop.style.marginLeft = (leftMargin / 2) + "px";
		}
	}

	if (widerThanWindow == false && tallerThanWindow == false) {
		//Center the image
		
		if (iWidth > iHeight) {
			imageTop.style.width = "100%";
			imagePanel.style.height = "auto";
			// only applies to three now
			resizedHeight = imageTop.height;
			topMargin = winHeight - resizedHeight - 50;
			imageTop.style.marginTop = (topMargin / 2) + "px";

		}

		if (iHeight > iWidth) {
			imageTop.style.width = "";
			imagePanel.style.height = (winHeight - 50) + "px";
		 	imageTop.style.height = "100%";

		 	resizedWidth = imageTop.width;
			leftMargin = winWidth - resizedWidth;
			imageTop.style.marginLeft = (leftMargin / 2) + "px";
		}

	}
}

document.onkeydown = function() {
	var e = window.event;

	/* 
	37 = LEFT
	38 = UP
	39 = RIGHT
	40 = DOWN

	*/

	if (e.keyCode == '37') {
		console.log("Left Key Pressed!")
		clickLeft() 
	}

		if (e.keyCode == '39') {
		console.log("Right Key Pressed!")
		clickRight() 
	}
}

function clickRight() {
	
	if (galleryIndex == gLength) {
		galleryIndex = 1;
	} else {
		galleryIndex++;
	}

	imageTop.setAttribute("src", "images/(" + galleryIndex + ").png");	
}

function clickLeft() {
	if (galleryIndex == 1) {
		galleryIndex = gLength;
	} else {
		galleryIndex--;
	}
	
	imageTop.setAttribute("src", "images/(" + galleryIndex + ").png");	
}

           
