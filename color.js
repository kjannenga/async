$(document).ready(function(){

	function colorCounter(){
		var currentColor = new Date()
		var red = currentColor.getHours().toString(16)
		var green = currentColor.getMinutes().toString(16)
		var blue = currentColor.getSeconds().toString(16)

		if (red.length < 2) {
	    	red = "0" + red;
	    } if (green.length < 2) {
		    green = "0" + green;
	    } if (blue.length < 2) {
		    blue = "0" + blue;
	    }

	    var hex = "#" + red + green + blue

		var str = document.getElementById('color')
		str.innerHTML = hex
		$('body').css('background-color', hex)
	  }

	setInterval(colorCounter, 1000)








})