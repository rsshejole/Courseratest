(function(window){                                            //everything's wrapped with IIFE
	var speakWord = "Hello";
	var hellospeaker = {
	speak : function (name) {
		console.log(speakWord + " " + name)
		
	}

}
		window.hellospeaker = hellospeaker                    //Exposed using window
})(window)