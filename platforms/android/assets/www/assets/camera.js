// JavaScript Document
//logMe.clearTheList("mylistC");
//console.log(localStorage.getItem("userId"));
function yeahBaby(){ return "http://m.josue45.com/"; }		
	
	
	
			
	function fixBackground(){ // not using
			var w = window.innerHeight;
				var w2 = window.pageYOffset;
				//alert("window inner height: "+w+" pageoffset: "+w2);
				//alert(w+w2);
				var b = document.getElementById("page");
				//var b = document.getElementsByTagName("BODY")[0];
					//b.style.minHeight = (w+w2)+"px !important";
					b.style.backgroundColor = "red !important";
				}

var logMe = 

{
	_: function(x){ return document.getElementById(x); },
	
	jmMenu: function(){
		return document.getElementById("jmmenuul");
		},

	toggleMenu: function(menuApp){
				
	logMe._(menuApp).onclick = function(){	
	var x = logMe._("jmmenu");
	if(x.style.width == "80%"){
		x.style.width = "0%";
		}else{
	    	x.style.width = "80%";
		}
	}
},
	
	checkIfLoggedIn: function(){
		if(localStorage.getItem("userId")){
				logMe.imIn();
				logMe.products();
				logMe.setYourIdLink();
				logMe.putTakeAPictureLink();
				app.createAGallery();		
			}
		},
		
	
	userIsValid: function(){
		if(localStorage.getItem("userId")){
		return true;	
		}else{
			return false;
			}
		},
	
	clearTheList: function(mylist){
		var ul = logMe._(mylist);
		//var li = ul.getElementsByTagName("li");
		//alert(li.length); 
		while(ul.hasChildNodes()){
			//alert(li[i].firstChild.nodeValue);
			ul.removeChild(ul.childNodes[0]);
			}
			//alert(li.length);
			
			setTimeout("logMe.displayFolders()", 3000);
			var url = document.URL;
				var newurl = url.indexOf("#");
				if(url.substring(newurl) == "#appGallery"){
					console.log("running appGallery to go home after picture");
					window.history.back();
					
				}
		},
		
	goToProducts: function(){
			location.assign("#products");
		},
	
	products: function(){
			
		if(logMe.userIsValid()){
			var menu = document.getElementById("jmmenuul");
			var li = document.createElement("li");
				li.setAttribute("id", "productLinks"); //////////////////////////////////
				li.setAttribute("onClick", "logMe.goToProducts()");
				li.innerHTML = "Sell Products ******";
				li.style.color = "blue";
				menu.appendChild(li);
		}
		
		},
		
	removeTheLinks: function(){
		var y = "";
		y = document.getElementById("jmmenuul");	
		y.removeChild(logMe._("productLinks"));////////////////////////////////////////////
		y.removeChild(logMe._("createAGallery"));
		y.removeChild(logMe._("logOutButton"));
		y.removeChild(logMe._("yourid"));
		logMe._("takePictureB").style.display = "none ";
		logMe._("test") ? y.removeChild(logMe._("test")) : "";
		
		
		},
	
	imIn:function(){
		var x = document.getElementById("blahhh");
			x.innerHTML = "Log Out";
			x.setAttribute("onClick", "logMe.logOut()");
			x.style.color = "red";
			
		},
		
	putTakeAPictureLink: function(){
		var ul = document.getElementById("jmmenuul");
				var li = document.createElement("li");
					li.style.color = "orange";
					li.setAttribute("id", "logOutButton");
					li.setAttribute("onClick", "app.takeApicture()");
					li.innerHTML = "Take a picture";
			//this.folder = folder;
			//app.folder = "gallery";
			console.log("****************************************************************");
					ul.appendChild(li);
			
			},
		
	logIn: function(){
		var error = "";
			var email = prompt("Provide email", "");
			var password = prompt("Provide password", "");
			
			if(email === null && password === null){
				error = "Cancelled";
				}
			if(email === "" && password === ""){
				error = "Please provide data";
				}
		
			if(error){
				alert(error);
				}else{
					this.email = email;
					this.password = password;
					logMe.getUserId();
					//logMe.displayFolders();
					//app.createAGallery();
					//logMe.Testing();
					
					}
		},
		
	logOut: function(){
		logMe._("jmmenu").style.width = "0%";
		var x = document.getElementById("blahhh");
				localStorage.removeItem("userId");
				x.setAttribute("onClick", "logMe.logIn()");
				x.innerHTML = "Log In";
				x.style.color = "";
				logMe.removeTheLinks(); //remove the links when logged out
				//logMe.displayFolders();
		},
		
	getUserId: function(){
		console.log();
			var x = "";
			var sendData = "";
				sendData = "?email="+this.email+"&password="+this.password;
					console.log(sendData);
				x = new XMLHttpRequest();
				x.open("GET", "http://www.josue45.com/api/index.php"+sendData, true);
				x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				x.onreadystatechange = function(){
						if(x.readyState == 4 && x.status == 200){
							//$data = array("userid" => $row_users['iduser'], "name" => $row_users['firstname'], "last" => $row_users['lastname']);
							//$data = array("error" => "Incorrect Login Information", "solution" => "Recover Password");
							  var r = JSON.parse(x.responseText);
							  if(r.error){
								  alert(r.error);
								  }else{
									  
									  alert("Welcome "+r.name+ " "+ r.last);
									  localStorage.setItem("userId", r.userid);
									  logMe.logMeIn();
									  logMe.products();
									  logMe.setYourIdLink();
									  logMe.putTakeAPictureLink();
									  app.createAGallery(); 
									  }
								
							}
					}
				
				x.send();
		
		},
		
	setYourIdLink: function(){
		var ul = document.getElementById("jmmenuul");
			var x = document.createElement("li");
				x.setAttribute("id", "yourid");
				x.style.color = 'green';
				x.innerHTML = "Your Id "+localStorage.getItem("userId");
				ul.appendChild(x);
		},
	
	logMeIn: function(){
		var x = document.getElementById("blahhh");
				x.setAttribute("onClick", "logMe.logOut()");
				x.style.color = "red";
				x.innerHTML = "Log Out";
				logMe.Testing();
		},
		
	displayFolders: function(){ //8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
		
				//logMe.clearTheList("mylistC");
				var sendData = "";
				var x = "";
				x = new XMLHttpRequest();
				localStorage.getItem("userId") ? sendData = "?userid="+localStorage.getItem("userId") : sendData = "?userid="+thePath();
				//var sendData = "?userid="+localStorage.getItem("userId");
				//http://josue45.com/api/jm.php
				x.open("GET", "http://josue45.com/api/jm.php"+sendData, true);
				x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				x.onreadystatechange = function(){
						if(x.readyState == 4 && x.status == 200){
							var r = JSON.parse(x.responseText);
							//alert(x.responseText);
							
						
							//this.r = r;
							if(!r[0].error){
								for(var i=0; i < r.length; i++){
										//console.log(r[i].directory);
										//result = ;
										if(r[i].image_count > 0){
											//logMe.createFolderLinks(r[i].directory, r[i].image_count, r[i].images);
											logMe.createFolderLinks(r[i].directory, r[i].image_count, r[i].images, r[i].w, r[i].h);
										//alert(r[i].images[w]);
										}
									}
							}
				$("#mylistC").listview('refresh');
				}
				}
				
		x.send();
		},
		
	createFolderLinks: function(nameA, num, images, w, h){
		console.log("Running line 259 createFolderLinks()");
		var TextNode = document.createTextNode(nameA+ " "+ num);
		var a = document.createElement("a");
		var li = document.createElement("li");
		var d = document.getElementById("mylistC");
			a.setAttribute("id", nameA);
			a.setAttribute("href", "#appGallery");
			//alert(width);
			a.appendChild(TextNode);
			li.appendChild(a);
			d.appendChild(li);
			//this.width = width;
			//this.height = height;
			
			a.onclick = function(){
				///////////////////////////////////////////////////////////////
				//alert(this.id);
				logMe._("appGalleryTitle").innerHTML = this.id;
				//alert(this.is);
				app.folder = this.id;
				console.log("fix line 238");
				/////////////////////////////////////////////////////////////////will add the title to the page two
				//var arr = new Array[images];
				
				//app.ph = 0;
				logMe._("here").innerHTML = "";
				for(var i=0; i<num; i++){
					//get window height with the current pictures
					
					var img = document.createElement("img");
						str = images[i][0];
						//strt = str.indexOf(".");
						img.setAttribute("id", str);
						//img.style.height = images[i].h;
						img.setAttribute("width", "100%");
						img.setAttribute("height", images[i].h);
						localStorage.getItem("userId") ?
						img.onclick = function(){
							app.i = this.id;
							app.nameA = nameA;
							//app.width = width;
							navigator.notification.confirm(
							 'Delete '+this.id+'!',  // message
    						logMe.deleteImage,         // callback
    						'Warning',            // title
    						['Yes', "No"]                  // buttonName
							);
							} : "";
							//app.ph += images[i].h;
							//alert(this.width);
						
						//img.setAttribute("height", h[i]);
						//alert(images[i][0]);
						img.setAttribute("title", images[i][0]);
						//if statement
						
							//alert(logMe.getWindowSize() + " Picture Size:" + app.ph);
							
							//alert(logMe);
						
							localStorage.getItem("userId") ?
							img.setAttribute("src", "http://m.josue45.com/mobile/"+localStorage.getItem("userId")+"/pics/"+nameA+"/"+images[i][0]):
							img.setAttribute("src", "http://m.josue45.com/mobile/"+thePath()+"/pics/"+nameA+"/"+images[i][0]);
						
					
				
				logMe._("here").appendChild(img);
							
				
				}
				
					
				//setTimeout("logMe.getWindowSize()",2000);
				
				};
				
			
		},
	getWindowSize: function(){
							var here = logMe._("here");
							var imagesAll = here.getElementsByTagName("img");
							logMe.d = 0;
				logMe.onwhatnumber = 0;
							for(var i=0; i<imagesAll.length; i++){
								//mybox = imagesAll[i].id;
								
								var nb = document.getElementById(imagesAll[i].id);
								var nb2 = nb.height/2;
								logMe.d += nb.height;
								
								logMe.onwhatnumber += 1;
								if(logMe.getWindowPageYoffset() > logMe.d-nb2){
									//alert(logMe.getWindowPageYoffset()+"in view"+ logMe.d+ " on what number "+logMe.onwhatnumber);
									//http://m.josue45.com/mobile/"+localStorage.getItem("userId")+"/pics/"+nameA+"/"+images[i][0]
									nb.setAttribute("src", "http://m.josue45.com/mobile/"+thePath()+"/pics/"+ app.folder +"/"+imagesAll[i].id);
									}
								
								
								
								//if(imagesAll.)
								}
		//var x = window.innerHeight;
		//return x;
		},
	getWindowPageYoffset: function(){
		var x = window.innerHeight;
		return x;
		},
	
		
	deleteImage: function(buttonIndex){
		
		 
		if(buttonIndex == 1){
				//navigator.notification.alert("ok then"+buttonIndex);
				//alert(app.i+" "+ localStorage.getItem("userId"));
				
				x = new XMLHttpRequest();
				var sendData = "?userid="+localStorage.getItem("userId")+"&image="+app.i+"&folder="+app.nameA;
				x.open("GET", "http://m.josue45.com/mobile/mobileTest/deleteImage.php"+sendData, true);
				x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				x.onreadystatechange = function(){
						if(x.readyState == 4 && x.status == 200){
							var r = JSON.parse(x.responseText);
							//var r = x.responseText;
							alert(r.status);
							app._(r.image).style.display = "none";
							logMe.countImages(r.image);
						}
						
				
				}
				}
				
		x.send();
		
			},
			
	countImages: function(image){
		var x = logMe._("here");
		x.removeChild(logMe._(image));
		var img = x.getElementsByTagName("img");
			
			if(img.length == 0){
				console.log("fix this line");
				logMe.clearTheList("mylistC");
				window.history.back();
				}
		
		},
		
	Testing: function(){
		//<li onClick="logMe.Testing()" id="test">Test Apps</li>
			if(localStorage.getItem("userId") == 1){
				var ul = document.getElementById("jmmenuul");
				var li = document.createElement("li");
					li.setAttribute("onclick", "logMe.Testing()");
					li.setAttribute("id", "test");
					li.innerHTML = "Test Apps";
				ul.appendChild(li);
				var x = document.getElementById("test");
				var id = prompt("testing Account", "");
				localStorage.setItem("userId", id);
				location.reload();
			}
		}
		
	}

//************************************************************************************************************************************
//app starts
var app = {
    // Application Constructor
	_:function(y){
			var x = document.getElementById(y);
		return x;
		},
	
	addPictureEvent: function(){
		app._("takePictureB").onclick = this.addPicture; //line 346
		},
		
	isChildOfThis: function(){
		var li = "";
		var listC = app._("mylistC");
			li = listC.getElementsByTagName("a");
		for(var i=0; li.length; i++){
			console.warn(li[i].id);
			}
		},
		
	togglePictureLink: function(){
		var x = app._("takePictureB");
			if(logMe.userIsValid()){
				x.style.display = "block";
			}else{
				x.style.display = "none"
			}
		},	
		
	addPicture: function(){
		//alert(e.target.parentNode.id);
		app.takeApicture();
		},
	
	setEventForSellData: function(){
			var btn = document.getElementById("sellProducts");
		
			btn.onclick = app.sendData;
		},
	
	sendData: function(){
		app.folder = "Products";
		app.makeFolder();
		app.takeApictureProducts();
		},

	takeApictureProducts: function(){
		navigator.camera.getPicture(this.imageUploadApp, this.onFail, {
			quality: 100, 
			destinationType: Camera.DestinationType.FILE_URI,
			targetWidth: 360,  correctOrientation: true, targetHeight: 600,
	 	})
	 },

	imageUploadApp: function(imageURI){
		app.imageFilenameProduct = imageURI.substr(imageURI.lastIndexOf('/')+1); 
		var options = new FileUploadOptions();
				options.fileKey="file";
				options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
				options.mimeType="image/jpeg";
				options.chunkedMode = false;
				var ft = new FileTransfer();
				//var imageURI = imageurl;
				var c = localStorage.getItem("userId");
				var data = "";
				data = app.collectData(app.imageFilenameProduct);
				var ajax = new XMLHttpRequest();
					ajax.open("POST", "http://www.josue45.com/api/jm.php", true);
					ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					ajax.onreadystatechange = function(){
						
							if(ajax.readyState == 4 && ajax.status == 200){
									//test image upload ****************
									//app.imageUploadApp(image, imageurl);
									//app.returnHomeMsg();
								}
						}
				ajax.send(data);
				ft.upload(imageURI, "http://m.josue45.com/class/upload_pictures_to_user.php?user="+c+"&folder="+app.folder, this.win, this.fail, options, true);
				app.onSuccess(imageURI);
				app.returnHomeMsg();
				
	},
	
	returnHomeMsg: function(){
		window.location.href = "#page";
		},
		
	collectData: function(currentImage){ //collects data for products data entry
		var url = "";
		
		var selected =	app._("selectmenuProducts").selectedIndex;
		var theOption = app._("selectmenuProducts").options;
		url += "dataEntry=true";
		//url += "&imageFilename=" + escape(localStorage.getItem("myimage"));
		url += "&imageFilename=" + escape(currentImage);
		
		url += "&userid=" + escape(localStorage.getItem("userId"));
		url += "&cat=" + escape(theOption[selected].value);
		url += "&name=" + escape(app._("Name").value);
		url += "&price=" + escape(app._("Price").value);
		url += "&short=" + escape(app._("shortDescription").value);
		url += "&long=" + escape(app._("LongDescription").value);
		return url;
		},
	
    initialize: function() {
      	 this.bindEvents();
		//this.Menu();
    },
	
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
			document.addEventListener('deviceready', this.onDeviceReady, false);
		this.setEventForSellData();
		this.addPictureEvent(); //line 324
			//app.checkConnection();
    },
	 
	takeApicture: function(){
			//alert("somewhere");
		//if(this.folder){
		console.warn("This id was clicked line 388"+ event.target.id);
		if(event.target.id == "logOutButton"){
			this.folder = "gallery";
			}
		
		console.warn(this.folder+" line 395");
		//}
		
		app.createFolder();
		navigator.camera.getPicture(this.yeah, this.onFail, {
			quality: 100, 
			destinationType: Camera.DestinationType.FILE_URI,
			targetWidth: 360,  correctOrientation: true,
 			targetHeight: 600,
	 	});
	 },
	 
	createFolder: function(){			
		//if(this.folder == "Products"){
			if(!this.folder){
				console.warn("fix this line 408");
					//}else{
				var folder = prompt("Folder name", "");
				
				//alert(folder);
				
				switch(folder){
					case null:
					this.folder = "gallery";
					alert("Items will be inserted in the default folder. its null");
					break;
					case "":
					this.folder = "gallery";
					alert("Items will be inserted in the default folder. no folder name");
					break;
					case folder:
					this.folder = folder.replace(/\s+/g, '-');
					break;
					case "undefined":
					this.folder = "gallery";
					break;
				}
			}
			app.makeFolder();
	},
	
	createAGallery: function(){
		var x = app._("jmmenuul");
		var li = document.createElement("li");
			li.setAttribute("id", "createAGallery");
			li.innerHTML = "Create Gallery";
			x.appendChild(li);
			
			li.onclick = function(){
				//app.askForFolderName();
				navigator.notification.prompt("Name of gallery", app.askForFolderName, "Create a new gallery", ["Create", "Cancel"]);
				
				}
		},
		
	askForFolderName: function(results){
		//alert(results.buttonIndex);
			if(results.buttonIndex == 1){
			//alert(results.input1);
			var x = results.input1;
			app.folder = x.replace(/\s+/g, '-');
			 app.takeApicture();
			}
			
		},
	
	makeFolder: function(){
		var data = "";
					data = "userId="+localStorage.getItem("userId");
					data += "&dir="+this.folder;
					console.warn(this.folder+":"+app.folder+" line 438");
			console.warn("**************"+data);
				var r = "";
					r = new XMLHttpRequest();
					
					r.open(this.type, this.url, true);
					r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					r.onreadystatechange = function(){
							if(r.readyState == 4 && r.status == 200){
									//alert(r.responseText);
								}
						}
					
					
					r.send(data);
				
			},
			
	yeah: function(imageURI){ //*************************************************************************************
			
			this.imageFilename = imageURI;
			    var options = new FileUploadOptions();
				options.fileKey="file";
				options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);//+'.jpg';
				options.mimeType="image/jpeg";
				options.chunkedMode = false;
				var ft = new FileTransfer();
				//var c = localStorage.getItem('userId');
				var c = localStorage.getItem("userId");
				ft.upload(imageURI, "http://m.josue45.com/class/upload_pictures_to_user.php?user="+c+"&folder="+app.folder, this.win, this.fail, options, true);
				app.onSuccess(imageURI);
							//*************************************************************************************		
},

	win:function(r){
		     console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
	},
	
	fail:function(error){
		console.log("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
		app.folder = "";
		console.warn("the folder is: "+this.folder+" line 529");	
		},
		
	onSuccess: function(imageURI) {
		console.log("Image Uploaded for user "+localStorage.getItem("userId"));
		app.folder = "";
		console.warn("the folder is: "+this.folder+" line 539");
		//alert("Image Uploaded with name " + imageURI);
		logMe.clearTheList("mylistC");							
		},
											
	onFail: function(message) {
		alert('Failed because: ' + message);
							app.folder = "";
						},
						
    // deviceready Event Handler
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
	//****************************************************************************************************************************************
    onDeviceReady: function() {
		//document.addEventListener("backbutton", app.videoBackfromIframe, false);
		app.checkConnection();
		logMe.toggleMenu("menuApp");
		app.togglePictureLink();
		//alert("device is ready");
		logMe.checkIfLoggedIn();
		logMe.displayFolders();
		//navigator.vibrate(1000);	
		//document.addEventListener('menubutton', app.Menu, true);
		//alert(navigator.connection.type);
		app.checkIfListIsLoaded();
	},
	
	checkIfListIsLoaded: function(){
			setTimeout("app.isChildOfThis()",1000);
		},
	//does not work on phones
	
	parallax: function(){ // does not work on phones
		//var x = document.getElementById("page");
			//x.style.position = "fixed";
			//x.style.backgroundPosition = "center "+ -(window.pageYOffset+2)+"px";
		//console.log("moving"+window.pageYOffset);
		},
		
	videoBackfromIframe: function(){ // needs work
		//alert(document.URL);
		},
		
	checkConnection: function(){ // check to see what type of connection there is
   		var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    console.warn('Connection type: ' + states[networkState]+"*****************************************************");
	
	if(states[networkState] == "wifi"){
		// 
		//location.assign("#noConnection");
		//window.location.href = "contact-page.html";
		}
},

	noNetWork: function(){ // fix or do for the iphone
		},
	
	setCategory: function (){
			var selectedMenu = document.getElementById("selectmenuProducts");
				if(selectedMenu.value == "createCategory"){
					var x = prompt("New Category", "");
					if(x){
							var opt = document.createElement("option");
								opt.value = x;
								opt.text = x;
								//selectedMenu.appendChild(opt);
								selectedMenu.add(opt);
						}else{
							alert("No New Category");
							}			
				}
			//localStorage.setItem("catSelected", "option2");
			}
			
  	};//ends app ends
	  	
	
app.type = "POST";
app.userId = localStorage.getItem("userId");
app.url = "http://m.josue45.com/class/createFolder.php";
//http://m.josue45.com/class/createFolder.php

var myApp =
{
	x: function(y){
		return xyc = document.getElementById(y); 
		},
		
	setTextNode: function(node, insert, align, tagName){
		this.node	= node
		this.insert = insert;
		this.align = align;
		this.tagName = tagName;
		},
		
	textNode: function(){
		var tag, node = "";
			node = document.createTextNode(this.node);
			this.tagName ? tag = document.createElement(this.tagName) : tag = document.createElement("b");
			tag.className = "moduleB";
			tag.appendChild(node);
			this.insert ? x(this.insert).appendChild(tag): x("c").appendChild(tag);
		}
}
	
var x = function(y){ return xyc = document.getElementById(y); }

function image(imageFilename, node, insert, width)
	{
		this.imageFilename = imageFilename;
		this.node = node;
		this.insert = insert;
		this.width = width;
	}

image.prototype.create = function create()
	{
		
		var img = document.createElement("img");
			console.warn(this.imageFilename+this.node);
			img.setAttribute("alt", this.node);
			img.setAttribute("src", this.imageFilename);
			img.style.display = "block";
			//img.style.textAlign = "center";
			//img.style.backgroundColor = "red";
			this.width ? img.style.width = this.width : img.style.width = "100%";
			x(this.insert).appendChild(img);
	}

function phoneNumber(number, node)
	{
		this.number = number;
		this.node = node;
	}

phoneNumber.prototype.call = function call()
	{
		//alert(this.node +" "+ this.number);
		textnode = document.createTextNode(this.node +" "+ this.number);  
		createLink(this.number, this.node);	
	}

phoneNumber.prototype.sms = function sms()
	{
		//alert(this.node +" "+ this.number);
			
	}
	 
function createLink(number, node)
	{
		var a = document.createElement("a");
		a.setAttribute("src", "sms:"+number);
		a.innerHTML = node;
		//x("status").appendChild(a);

	}

getUrl.prototype.clearPage = function clearPage(){
		x("b").innerHTML = "";
	}

function getUrl(url, type, id, node, page)
	{
		this.url  = url;
		this.type = type;
		this.id = id;
		this.node = node;
		this.page = page;
	}
	
getUrl.prototype.linkCreate = function linkCreate(){
		var a = document.createElement("a");
			a.setAttribute("href", this.page);
			a.setAttribute("id", this.id);
			a.setAttribute("url2", this.url);
		var li = document.createElement("li");
			li.appendChild(a);
			a.innerHTML = this.node;
			x("mylistB").appendChild(li);
			$("#mylistB").listview('refresh');			
	}

getUrl.prototype.car = function car(){
	
				
				//alert(this.url);
				var url = this.url;
				
				//a.onclick = function(){
					x("car").onclick = function(){
				//alert(url);
				x('b').innerHTML = "";
				var ajax = new XMLHttpRequest();
				ajax.open("POST", url ,true);
				ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				ajax.onreadystatechange = function(){
						if(ajax.readyState == 4 & ajax.status == 200){
							//alert(ajax.responseText.lenght);
							var a = JSON.parse(ajax.responseText);
								
								for(var i=0; i<a.length; i++){
								console.log(a[i].model);
								createImage(a[i].image, a[i].userid, a[i].model, a[i].year);
						}
					}
				}
				//ajax.send("appSettings=true&phoneOnAllPages="+y.value+"&id="+getUserId());
				ajax.send();
			}
				
		}

function createImage(image, userid, model, year){
	
	var img = document.createElement('img'); var span = document.createElement("span");
	//alert(model.length)
		if(model.length > 10){
			var m = model.substring(0,9)+"...";
			}else{
				var m = model;
				}
	var textNode = document.createTextNode(year+ " "+ m.toUpperCase());
		span.setAttribute("id", "title");
		span.appendChild(textNode);
	var li = document.createElement('li');
		img.setAttribute("src", "http://www.salecarro.com/assets/cars_for_sale/"+userid+"/_small"+image);
		li.appendChild(img);
		li.appendChild(span);
		x("b").appendChild(li);
}

	function module(){
			$.getJSON(yeahBaby()+"mobile/"+thePath()+"/module.json", function(data){
					var a = ["call", "sms", "image", "textNode", "car", "LINK"];
					console.log(data.length+"**************************************");
					for(var i=0; i<data.length; i++){
 
						switch (data[i].module) {
						
						//fix
							case "call":
							var phone = new phoneNumber(data[i].number, data[i].node);
								phone.call();
								break;
						//fix
							case "sms":
							var phone = new phoneNumber("619-316-9904", "text us");
								phone.sms();
								break;
						
							case "image":
							var img = new image(data[i].imageFilename, data[i].node, data[i].insert, data[i].width);
							  	img.create();
								break;
						// fix the appendChild have notes on folder		
							case "textNode":
								myApp.setTextNode(data[i].node, data[i].insert);
								myApp.textNode();
								break;
								
						//fix
							case "car":
							var Url = new getUrl('http://www.salecarro.com/api/index.php', 'car', "car", data[i].node , "#carPage");
								Url.linkCreate();
								Url.car();
								break;
							} 
						}
					
				});
				
		}
			var doc_css = document.createElement("link");
	doc_css.setAttribute("type", "text/css");
	doc_css.setAttribute("rel", "stylesheet");
	doc_css.setAttribute("href", "http://m.josue45.com/mobile/final-customcss.php?iduser="+thePath());
	document.getElementsByTagName('head')[0].appendChild(doc_css);
	
