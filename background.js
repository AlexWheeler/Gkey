var l = 76;
setSignOutHotKeys(l)

//by default is CTRL + key

function setSignOutHotKeys(key) {
	$( document ).keydown(function(event){
		if (event.keyCode == key && event.ctrlKey) {
		links = document.getElementsByTagName('a');
		for (i=0; i < links.length; i++) {
				if (links[i].innerHTML == "Sign out") {
					links[i].click();
				}
			}
		}
	});
}		
