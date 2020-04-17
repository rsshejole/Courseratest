// // console.log(document.getElementById('title'))
// // console.log(document instanceof HTMLDocument)


// function sayhello (event) {
// 	this.textContent = "Said it"
// 	// var name = document.getElementById('myname').value

// 	var message = "<h2>Hello " + name + "!</h2>"

// 	document.querySelector("#content").innerHTML = message

// 	// if (name === "student") {
// 	// 	document.querySelector("h1").innerHTML = "<h1>Hello World</h1>"
// 	// 	var paste = document.querySelector("h1").textContent 

// 	// 	paste = paste + "****Loving It*****"

// 	// 	document.querySelector("h1").textContent = paste

// 	// }
// }


// // document.querySelector("button").addEventListener("click",sayhello);
// document.querySelector("button").onclick = sayhello;


// // document.querySelector("body").addEventListener("mousemove",
// // 	function (event){
// // 		if (event.shiftKey === true) {
// // 			console.log("x: " + event.clientX);
// // 			console.log("y: " + event.clientY);
// // 		}
		
// // 	}
// // 	);

document.addEventListener('DOMContentLoaded',
	function(event){

		var name = ""

		document.querySelector("button").addEventListener('click',function(){

			$ajaxUtils.sendGetRequest('/name.txt',
				function(res){
					         //responseText to get the text content of the requestUrl
					console.log(res)
					document.querySelector('#content').textContent = "hello" + " " + res

				},false)


})
	})

