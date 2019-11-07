$(document).ready(function(){

/* ANIMATIONS */

	/* SAFARI Source: https://stackoverflow.com/questions/7944460/detect-safari-browser */
	var ua = navigator.userAgent.toLowerCase(); 
	if (ua.indexOf('safari') != -1) { 
	  if (ua.indexOf('chrome') > -1) {
	  	false;
	  }else{
		var pedal = document.querySelector('.whale__pedal');
		var monocycle = document.querySelector('.whale__wheel');
		monocycle.style.transformOrigin = "50% 50%";
		pedal.style.transformOrigin = "50% 50%";
	  }
	}

	/* No anim except banner (prevent opacity blink) */
	if(window.innerWidth > 400){
		var animSVG = document.querySelectorAll('.animSVG');

		for(var i = 0; i < animSVG.length; i++){
			animSVG[1].classList.remove('banner-anim');
			animSVG[0].style.opacity = "0";
			animSVG[1].style.opacity = "0";
			animSVG[0].classList.remove('no-anim');
			animSVG[1].classList.remove('no-anim');
			animSVG[0].style.opacity = "1";
			animSVG[1].style.opacity = "1";
		}
	}

	/* Stop anim scroll */
	document.addEventListener('scroll', function(){
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop
		offset(animSVG[0])

		for(var i = 0; i < animSVG.length; i++){
			var animSVGOffset = offset(animSVG[i]).top;
			var animSVGOffsetHeight = animSVG[i].offsetHeight;
			if(animSVGOffset - docHeight < scrollTop
			&& scrollTop < animSVGOffsetHeight + animSVGOffset){
				animSVG[i].classList.remove('no-anim');
			}
			else{
				animSVG[i].classList.add('no-anim');
			}
		}
	});

/* KONAMI Source https://openclassrooms.com/forum/sujet/le-konami-code-61191 */
if ( window.addEventListener )
    {
        var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
        window.addEventListener("keydown", function(e){ 
            kkeys.push( e.keyCode ); 
            if ( kkeys.toString().indexOf( konami ) >= 0 ) 
            	document.body.classList.add('color--dark');
        }),
        true;
        }
});










