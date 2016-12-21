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
	iWidth = imageTop.naturalWidth;
	iHeight = imageTop.naturalHeight;	

	// var wider = false;

	// imageTop.style.width = ""
	// // imagePanel.style.height = ""

	// if (iWidth > iHeight) {
	// 	wider = true;	
	// }

	// console.log(wider);

	// if (wider == true) {
	// 	imageTop.style.width = "100%"
	// 	imagePanel.style.height = "100%"
	// 	console.log("Width 100%");
	// } else {		
	// 	imagePanel.style.height = (winHeight - 50) + "px";
	// 	imageTop.style.height = "100%"
	// 	console.log("Height 100%");
	// }

	var widerThanWindow = false;
	var tallerThanWindow = false;

	if (iWidth > winWidth) {
		widerThanWindow = true;
		console.log("Wider");
	}

	if (iHeight > winHeight) {
		tallerThanWindow = true;
		console.log("Taller");
	}

	if (widerThanWindow == true && tallerThanWindow == false) {
		imageTop.style.width = "100%";
	}

	if (widerThanWindow == false && tallerThanWindow == true) {
		imageTop.style.width = "";
		imagePanel.style.height = (winHeight - 50) + "px";
	 	imageTop.style.height = "100%"
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
		}
	}

	if (widerThanWindow == false && tallerThanWindow == false) {
		//Center the image
		
		if (iWidth > iHeight) {
			imageTop.style.width = "";
			imagePanel.style.height = (winHeight - 50) + "px";
		 	imageTop.style.height = "100%"
		}

		if (iHeight > iWidth) {
			imageTop.style.width = "100%";
		}

	}
};

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

           
