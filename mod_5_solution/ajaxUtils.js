(function(global){

	ajaxUtils = {};

	
	function getRequestObject(){       
		if (global.XMLHttpRequest) {                //XMLHttpRequest is ajax object that generates a request that we have to send to the server
			return (new XMLHttpRequest())
		}
		else {
			global.alert("Ajax Not Supported")
			return (null);
		}
	}
	//var request = sendGetRequest()  // we might have done this by some changes but as it is asynchronous ajaxutils being called many a times hence same request would have been used ..hmmmmm sad leads to race condition hahahahaha
	ajaxUtils.sendGetRequest = 
	
		function(requestUrl,responseHandler,isJson){
			var request = getRequestObject()                  
			request.onreadystatechange = 
				function(){
					handleResponse(request,responseHandler,isJson)        // send the request and responseHandler to the function to verify everythings ok and ****then request response is given to responseHandler*****
				}
			request.open("GET",requestUrl,true)         //Generates GET request
			request.send(null)         // null because we are actually sending get request not the post request , anyone we have to send , for post create an object and pass it to send...
		}
	


	function handleResponse(request,responseHandler,isJson) {
		if ((request.readyState == 4) && (request.status == 200)){

			if (isJson == undefined){
				isJson = true
			}

			if (isJson == true){
				responseHandler(JSON.parse(request.responseText))
			}

			else {
				responseHandler(request.responseText);    //***responseHandler gets the response from request***
			}
			               
		} 
	}


	global.$ajaxUtils = ajaxUtils;            //Made global



})(window)














// (function (global) {

// // Set up a namespace for our utility
// var ajaxUtils = {};


// // Returns an HTTP request object
// function getRequestObject() {
//   if (global.XMLHttpRequest) {
//     return (new XMLHttpRequest());
//   } 
//   else if (global.ActiveXObject) {
//     // For very old IE browsers (optional)
//     return (new ActiveXObject("Microsoft.XMLHTTP"));
//   } 
//   else {
//     global.alert("Ajax is not supported!");
//     return(null); 
//   }
// }


// // Makes an Ajax GET request to 'requestUrl'
// ajaxUtils.sendGetRequest = 
//   function(requestUrl, responseHandler) {
//     var request = getRequestObject();
//     request.onreadystatechange = 
//       function() { 
//         handleResponse(request, responseHandler); 
//       };
//     request.open("GET", requestUrl, true);
//     request.send(null); // for POST only
//   };


// // Only calls user provided 'responseHandler'
// // function if response is ready
// // and not an error
// function handleResponse(request,
//                         responseHandler) {
//   if ((request.readyState == 4) &&
//      (request.status == 200)) {
//     responseHandler(request);
//   }
// }


// // Expose utility to the global object
// global.$ajaxUtils = ajaxUtils;


// })(window);