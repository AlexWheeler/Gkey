$( document ).keydown(function(event){
	if (event.keyCode == 76) {
	links = document.getElementsByTagName('a');
	for (i=0; i < links.length; i++) {
			if (links[i].innerHTML == "Sign out") {
				links[i].click();
			}
		}
	}
});



		
		