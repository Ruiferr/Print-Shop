var slideIndex = 1;

window.onload = function() {
	showDivs(slideIndex);
	fadeSlider();

	function fadeSlider() {
		var i;
		var x = document.getElementsByClassName("slideImg");

		    	
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}

		slideIndex++;

		if (slideIndex > x.length) {
			slideIndex = 1
		}


		x[slideIndex-1].style.display = "block"; 
		setTimeout(fadeSlider, 9000);
		dots(); 
	}
   
}

	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}

	function currentDiv(n) {
  	  showDivs(slideIndex = n);
	}


	function showDivs(n) {
		  var i;
		  var x = document.getElementsByClassName("slideImg");
		 

		  if (n > x.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = x.length}

		  for (i = 0; i < x.length; i++) {
		     x[i].style.display = "none";  
		  }

		  for (i = 0; i < dots.length; i++) {
		     dots[i].className = dots[i].className.replace(" color-select", "");
		  }

		  x[slideIndex-1].style.display = " block";
		  dots();  
	}



	function dots(){
	    var i;
		var dots = document.getElementsByClassName("dots");

	    for (i = 0; i < dots.length; i++) {
	     dots[i].className = dots[i].className.replace(" color-select", "");
	  	}

	  	dots[slideIndex-1].className += " color-select"; 
	}





