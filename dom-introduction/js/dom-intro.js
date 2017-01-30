//getElementById
//use this to target items in the DOM (document object model)

//var k; 
//for(k in document) {
//	console.log (k + " :: " + document[k] + "\n\n"); //loops through all the objects in the dom
	
//}

console.log("\n\n getElementById \n");
//Get ElementbyId
var tag_line = document.getElementById("tag-line"); // get element by ID returns a single object
console.log (tag_line);

// getElementsByTagName - Returns a collection of elements (an array)
console.log("\n\n getElementByTagName \n");

var pgs = document.getElementsByTagName("p");
console.log(pgs);

console.log("Number of Array ellements is: " + pgs.length);

//querySelectorAll - returns a collection of elements (array)
console.log("\n\n querySelectorAll \n");



var my_boxes = document.querySelectorAll (".box");
console.log(my_boxes);


//querySelector - similar to querySelectorAll but returns the only the first object in the document

console.log("\n\n querySelector \n");

var one_box = document.querySelector (".box");
console.log(one_box);

// editting content using inner html
console.log("\n\n change html with JS \n using innerHTML");

var t_line = document.getElementById("tag-line");


t_line.innerHTML = "I love Soccer!";
console.log (t_line.innerHTML);




