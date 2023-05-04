var newComponent = (function(){
	function displayAlert(message){
		alert("Requête envoyée à " + message + " !");
	};

	return {
		displayAlert: (message) => displayAlert(message),
	}
})();