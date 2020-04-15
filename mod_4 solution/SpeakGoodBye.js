(function(window){											//everything's wrapped with IIFE
	var speakWord = "Good Bye"
	var byespeaker = {
	speak : function (name) {
		console.log(speakWord + " " + name)
	}
}
		window.byespeaker=byespeaker						//Exposed using window
})(window)
