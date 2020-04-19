// $(function(){

// 	$('.navbar-toggler').blur(function(event){
// 		var screenSize = window.innerWidth 
// 		if (screenSize < 768) {
// 			$('#contentlist').collapse('hide')
// 		}
// 	})
// })

jQuery(document).ready(function($){

// jQuery code is in here
	$(function(){

	$('.navbar-toggler').blur(function(event){
		var screenSize = window.innerWidth 
		if (screenSize < 768) {
			$('#contentlist').collapse('hide')
		}
	})
})

});




(function (global) {

	var dc = {}

	var homeHTML = "snip/home_snip.html"
	




	var insertHTML=function (selector,html){

		var taregtEle = document.querySelector(selector)
		taregtEle.innerHTML = html;
		// $(selector).innerHTML = html
	}


	//show loading gif
	var showLoading =  function (selector){
		var html = "<div class = 'text-center'>"
		html += "<img src = '../image/load.gif'></div>"
		insertHTML(selector,html)
	}


	document.addEventListener("DOMContentLoaded",function(event){



		showLoading("#main_content")
		
		

		$ajaxUtils.sendGetRequest(homeHTML,

			function(responseText) {
				document.querySelector('#main_content').innerHTML = responseText
			}
		
		,false)

		

	})

	global.$dc = dc
})(window)