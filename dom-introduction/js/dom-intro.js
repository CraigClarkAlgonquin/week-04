//getElementById
//use this to target items in the DOM (document object model)

//var k; 
//for(k in document) {
//	console.log (k + " :: " + document[k] + "\n\n"); //loops through all the objects in the dom
	
//}

/*
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

*/


//TASK 01
/*
	add a logo to thhe header 
	<img src="http://placehold.it/200x200" alt="logo">
	
	access header
	
	use children property to access <div class="box">
	
	use children property with ndex [0] to push image tag inside <div class="masthead">
	*/

var header = document.getElementsByTagName("header")[0];// get the first element, so use index[0]
var box = header.children[0];
console.log("\n\n");
console.log(box.children);

//insert image as a first child of box
box.children[0].innerHTML = "<img src=\"http://placehold.it/200x200\">";


//Task02

/*
	1. access all <ul> tags inside document by using getElementByTagName.
	2. Use that reference to access the <ul> with the class "social media" using querySelector
	3. use children property to get a list of all social media items inside array
	4. loop and print the array elements in the console
*/


var social= document.querySelector(".social-media");
console.log("\n\n");
console.log(social);

var list_items_of_social = social.children;
console.log("\n\n");
console.log(list_items_of_social);

for(i=0; i < list_items_of_social.length; i += 1) {
	console.log(list_items_of_social[i].innerHTML);
}




