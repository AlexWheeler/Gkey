var l = 76;
var ctrl = 'event.ctrlKey'

setSignOutHotKeys(l,ctrl)

function setSignOutHotKeys(key1, key2) {
	$( document ).keydown(function(event){
		if (event.keyCode == key1 && key2) {
		links = document.getElementsByTagName('a');
		for (i=0; i < links.length; i++) {
				if (links[i].innerHTML == "Sign out") {
					links[i].click();
				}
			}
		}
	});
}		
		