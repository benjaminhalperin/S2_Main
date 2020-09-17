function init() {
// place background image on canvas
	var c = document.getElementById('canvas');
	var ctx = c.getContext('2d');
	var imageObj = new Image();
  
	imageObj.onload = function() {
	ctx.drawImage(imageObj, 0, 0);
	};
	imageObj.src = 'logo.jpg';
}

window.addEventListener('load', init, false); 


