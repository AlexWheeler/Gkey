window.onload = function() {
setSubmitEvent();
	
	function setSubmitEvent() {
		var submitButton = document.getElementById('submit');
		var selectOptions = document.getElementById('form_select');
			submitButton.onclick = function(e) {
				e.preventDefault();
				var selectedKey = selectOptions.options[selectOptions.selectedIndex].innerHTML;
				window.localStorage.key = selectedKey;
			};
	};
}
