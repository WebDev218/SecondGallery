var imageArray = [];
var gLength;
var imagePanel = document.getElementById("imagePanel");
var imageContainer = document.getElementById("imageContainer");
var imageTop = document.createElement("img");
var imageBottom = document.createElement("img");
var galleryIndex;

function loadGallery() {
	// imageArray = document.getElementsByClassName("img");	
	// gLength = imageArray.length;

	galleryIndex = 1;

	 gLength = 4; //This is temporary until I work out how to load the array. 
	 for (i=0;i<gLength;i++) {
	 	imageArray[i] = "images/(" + (i + 1) + ").png";
	 }
	

	imagePanel.appendChild(imageTop);
	imageTop.setAttribute("class", "img");
	imageTop.setAttribute("src", "images/(" + galleryIndex + ").png");
	
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

