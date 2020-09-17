
function showCoords(event) {
// תחילה נשיג פוינטר לאלמנט הקנבס שעליו ברצוננו לצייר
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	
//  חילוץ קואורדינטות מיקום סמן עכבר במשטח קנבס
	var cX = event.clientX;
    var cY = event.clientY;
    var coords1 = cX;
	var coords2 = cY;

// קביעת ביאס לקואורדינטות מיקום העכבר במשטח קנבס	
	var offsetX = 210;
	var offsetY = 60;
	
// מנקודה זו אנו מתחילים לצייר את הריבוע
	ctx.beginPath();
	ctx.lineWidth = "3";
	ctx.strokeStyle = "#00FFFF";
	ctx.rect((coords1-offsetX), (coords2-offsetY), 25, 25);
	ctx.stroke();

//	תיחום משטח המלבן לנוכחות סמן עכבר עבור תצוגת מקט הפריט
	if (((coords1-offsetX) > 98) && ((coords1-offsetX) < 230) && ((coords2-offsetY) > 400) && ((coords2-offsetY) < 450)){
	
//  קביעת המשטח הקבוע לתצוגת מחרוזת המקט בנוכחות סמן עכבר במלבן הפריט	
	ctx.clearRect(0, 0, 700, 50);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
	ctx.fillText('PEG-T-CAM REV-A1 Camera version 1-Channel Encoder/Decode', 10, 25);
	
	}
	
	else if
	(((coords1-offsetX) > 282) && ((coords1-offsetX) < 420) && ((coords2-offsetY) > 400) && ((coords2-offsetY) < 450)){
	
	ctx.clearRect(0, 0, 700, 50);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
	ctx.fillText('PEG-T-CAM REV-A1 Camera version 1-Channel Encoder/Decode', 10, 25);
	}

	else if
	(((coords1-offsetX) > 510) && ((coords1-offsetX) < 600) && ((coords2-offsetY) > 430) && ((coords2-offsetY) < 480)){
	
	ctx.clearRect(0, 0, 700, 50);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
	ctx.fillText('NPort_IA5000_Series', 10, 25);
	}	

	else if
	(((coords1-offsetX) > 610) && ((coords1-offsetX) < 750) && ((coords2-offsetY) > 430) && ((coords2-offsetY) < 480)){
		
	ctx.clearRect(0, 0, 700, 50);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
	ctx.fillText('ADAM_6066', 10, 25);
	}	

		else if
	(((coords1-offsetX) > 740) && ((coords1-offsetX) < 900) && ((coords2-offsetY) > 430) && ((coords2-offsetY) < 480)){
		
	ctx.clearRect(0, 0, 700, 50);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
	ctx.fillText('Contactor_ISKRA -- KD20-10', 10, 25);
	}	

}

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


