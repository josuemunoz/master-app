// JavaScript Document
//logMe.clearTheList("mylistC");

console.log(localStorage.getItem("userId"));
if(localStorage.getItem("userId") != null && localStorage.getItem("userId") != ""){
	var id = localStorage.getItem("userId");
	}else{
		var id=1;
	}
	
 	function yeahBaby(){ return "http://m.josue45.com/"; }		
	
	function thePath(){ //this will return the path of current user
		return id;
			}

var logMe = 

{
	_: function(x){ return document.getElementById(x); },
	jmMenu: function(){
			return document.getElementById("jmmenuul");
		},
	
	checkIfLoggedIn: function(){
		if(localStorage.getItem("userId")){
				logMe.imIn();
				logMe.products();
				logMe.setYourIdLink();
				logMe.putTakeAPictureLink();
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
			
			logMe.displayFolders();
			var url = document.URL;
				var newurl = url.indexOf("#");
				if(url.substring(newurl) == "#page2"){
					window.history.back();
				}
		},
		
	goToProducts: function(){
			location.assign("#products");
		},
	
	products: function(){
			var menu = document.getElementById("jmmenuul");
			var li = document.createElement("li");
				li.setAttribute("id", "productLinks"); //////////////////////////////////
				li.setAttribute("onClick", "logMe.goToProducts()");
				li.innerHTML = "Sell Products ******";
				li.style.color = "blue";
				menu.appendChild(li);
		
		},
	removeTheLinks: function(){
		//alert("removing this link");
		var y = "";
		y = document.getElementById("jmmenuul");	
		y.removeChild(logMe._("productLinks"));////////////////////////////////////////////
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
		
	deleteTakeAPictureLink: function(){
		var y = document.getElementById("jmmenuul");
			var x = document.getElementById("logOutButton");
				y.removeChild(x);
			
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
					
					}
			
			
		},
		
	logOut: function(){
		var x = document.getElementById("blahhh");
				localStorage.removeItem("userId");
				x.setAttribute("onClick", "logMe.logIn()");
				x.innerHTML = "Log In";
				x.style.color = "";
				
				
				logMe.removeTheLinks();
				logMe.deleteTakeAPictureLink();
				logMe.removeYourIdLink();
				logMe.testingOnly();
								
		},
		
	getUserId: function(){
			console.log();
			var x = "";
				sendData = "?email="+this.email+"&password="+this.password;
					console.log(sendData);
				x = new XMLHttpRequest();
				x.open("GET", "http://www.josue45.com/api/index.php"+sendData, true);
				x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				x.onreadystatechange = function(){
						if(x.readyState == 4 && x.status == 200){
							//////////
							//$data = array("userid" => $row_users['iduser'], "name" => $row_users['firstname'], "last" => $row_users['lastname']);
							//$data = array("error" => "Incorrect Login Information", "solution" => "Recover Password");
							//////////
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
	removeYourIdLink: function(){
			var y = document.getElementById("jmmenuul");
			var x = document.getElementById("yourid");
				y.removeChild(x);
		},
	
	logMeIn: function(){
			var x = document.getElementById("blahhh");
				x.setAttribute("onClick", "logMe.logOut()");
				x.style.color = "red";
				x.innerHTML = "Log Out";
				//logMe.getUserId();
		},
		
	displayFolders: function(){
		
				//logMe.clearTheList("mylistC");
				var x = "";
				x = new XMLHttpRequest();
				var sendData = "?userid="+localStorage.getItem("userId");
				//http://josue45.com/api/jm.php
				x.open("GET", "http://josue45.com/api/jm.php"+sendData, true);
				x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				x.onreadystatechange = function(){
						if(x.readyState == 4 && x.status == 200){
							var r = JSON.parse(x.responseText);
							//alert(r);
							//var result = "";
							//this.r = r;
							if(!r[0].error){
								for(var i=0; i < r.length; i++){
										//console.log(r[i].directory);
										//result = ;
										if(r[i].image_count > 0){
										//alert(r[i].images.lenght);
										//create a array
										//var img = [];
										//for(var i=0; i < r[i].image_count; i++){
										//img = r[i].images[i];
										//}
										
										logMe.createFolderLinks(r[i].directory, r[i].image_count, r[i].images);
										}
										
									}
								//alert(result);
						}
				$("#mylistC").listview('refresh');
				}
				}
				
		x.send();
		},
		

	createFolderLinks: function(nameA, num, images){
		
		var TextNode = document.createTextNode(nameA+ " "+ num);
		var a = document.createElement("a");
		var li = document.createElement("li");
		var d = document.getElementById("mylistC");
			a.setAttribute("id", nameA);
			a.setAttribute("href", "#page2");
			
			a.appendChild(TextNode);
			li.appendChild(a);
			d.appendChild(li);	
			a.onclick = function(){
				///////////////////////////////////////////////////////////////
				//alert(this.id);
				logMe._("titlebaby").innerHTML = this.id;
				app.folder = this.id;
				console.log("fix line 238");
				
				
				/////////////////////////////////////////////////////////////////will add the title to the page two
				//var arr = new Array[images];
				logMe._("here").innerHTML = "";
				for(var i=0; i<num; i++){
					
					var img = document.createElement("img");
						img.setAttribute("width", "100%");
						img.setAttribute("src", "http://m.josue45.com/mobile/"+localStorage.getItem("userId")+"/pics/"+nameA+"/"+images[i]);
					logMe._("here").appendChild(img);
					}
				
				};
			
		},
		
	Testing: function(){
			var x = document.getElementById("test");
				var id = prompt("testing Account", "");
				localStorage.setItem("userId", id);
				location.reload();
		}
	
	}



//************************************************************************************************************************************

var app = {
    // Application Constructor
	
	_:function(y){
		var x = document.getElementById(y);
		return x;
		},
	
	addPictureEvent: function(){
		//x = document.getElementById("myLI").parentNode.nodeName;
		app._("takePictureB").onclick = this.addPicture;
		},
		
	addPicture: function(e){
		//alert("this is working");
		//x = document.getElementById(this.id);
		//alert(e.target.id);
		//alert(x);
		app.takeApicture();
		
		},
	
	setEventForSellData: function(){
			var btn = document.getElementById("sellProducts");
		
			btn.onclick = app.sendData;
		},
	
	sendData: function(){
		app.takeApictureProducts();
		
		//alert(localStorage.getItem("myimage"));
		var image = localStorage.getItem("myimage");
		var imageurl = localStorage.getItem("myimageurl");
		var data = "";
			data = app.collectData(image);

				var ajax = new XMLHttpRequest();
					ajax.open("POST", "http://www.josue45.com/api/jm.php", true);
					ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					ajax.onreadystatechange = function(){
						
							if(ajax.readyState == 4 && ajax.status == 200){
									//test image upload ****************
									
									//if(ajax.responseText){
									app.imageUploadApp(image, imageurl);
									app.returnHomeMsg();
									//}
									
								}
						}
					
					
					ajax.send(data);
					
		
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
		//this.doSomethingMenu;
    },
	
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		this.setEventForSellData();
		this.addPictureEvent(); //line 292
			//app.checkConnection();
    },
	 
	takeApictureProducts: function(){
		//alert("somewhere");
							this.folder = "Products";
							app.makeFolder();
							
							navigator.camera.getPicture(this.getImageFilename, this.onFail, {
								quality: 100, 
								destinationType: Camera.DestinationType.FILE_URI,
								targetWidth: 360,  correctOrientation: true,
 								targetHeight: 600,
	 })
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
					this.folder = folde.replace(/\s+/g, '-');
					break;
					case "undefined":
					this.folder = "gallery";
					break;
				}
			}
			app.makeFolder();
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
			
	getImageFilename: function(imageURI){ //*************************************************************************************
				
			
			//this is the original image taken
			localStorage.setItem("myimage", imageURI.substr(imageURI.lastIndexOf('/')+1));
			localStorage.setItem("myimageurl", imageURI);
			//return imageURI.substr(imageURI.lastIndexOf('/')+1);
			
			/*
	           	var options = new FileUploadOptions();
				options.fileKey="file";
				options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);//+'.jpg';
				options.mimeType="image/jpeg";
				options.chunkedMode = false;
				var ft = new FileTransfer();
				var c = localStorage.getItem("userId");
				ft.upload(imageURI, "http://m.josue45.com/class/upload_pictures_to_user.php?user="+c+"&folder="+app.folder, this.win, this.fail, options, true);
				app.onSuccess(imageURI);		 		
       	*/
},

	imageUploadApp: function(image, imageurl){
		var options = new FileUploadOptions();
				options.fileKey="file";
				options.fileName=image;
				options.mimeType="image/jpeg";
				options.chunkedMode = false;
				var ft = new FileTransfer();
				var imageURI = imageurl;
				var c = localStorage.getItem("userId");
				ft.upload(imageURI, "http://m.josue45.com/class/upload_pictures_to_user.php?user="+c+"&folder="+this.folder, this.win, this.fail, options, true);
				app.onSuccess(imageURI);
	},
		
	yeah: function(imageURI){ //*************************************************************************************
				
			
			
			localStorage.setItem("myimage", imageURI.substr(imageURI.lastIndexOf('/')+1));
			this.imageFilename = imageURI;
			//app.imageToUpload = imageURI;
			//window.location.href = "#Products";
	           var options = new FileUploadOptions();
	
				options.fileKey="file";
				options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);//+'.jpg';
				
				
				
				options.mimeType="image/jpeg";
				options.chunkedMode = false;
				var ft = new FileTransfer();
				//var c = localStorage.getItem('userId');
				var c = localStorage.getItem("userId");
			
				ft.upload(imageURI, "http://m.josue45.com/class/upload_pictures_to_user.php?user="+c+"&folder="+app.folder, this.win, this.fail, options, true);
				//window.location.href = "#Products";
				
				app.onSuccess(imageURI);
				 		
        //window.location.href = "#Products";
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
			
			this.folder = "";
		console.warn("the folder is: "+this.folder+" line 529");
			
		},
		
	onSuccess: function(imageURI) {
			//this.imageFilename = imageURI;
		//alert("Image Uploaded for user "+localStorage.getItem("userId"));
		console.warn("line 536. image uploaded "+imageURI);
		
		this.folder = "";
		console.warn("the folder is: "+this.folder+" line 539");
		//alert(localStorage.getItem("myimage"));
		//window.location.href = "#Products";
		//get imagefilename from server
		
		//alert("Image Uploaded with name " + imageURI);
		logMe.clearTheList("mylistC");	
		//logMe.displayFolders();
								
											},
											
	onFail: function(message) {
		alert('Failed because: ' + message);
							app.folder = "";
						},
    // deviceready Event Handler
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
	
    //alert("device is ready");
	//navigator.vibrate(1000);
	app.checkConnection();
	
	//cordova.addDocumentEventHandler('menubutton');
	//navigator.app.overrideButton("menubutton", true)
	document.addEventListener('menubutton', this.Menu, false);
alert(navigator.connection.type);

	},
	//does not work on phones
	parallax: function(){
		//var x = document.getElementById("page");
			//x.style.position = "fixed";
			//x.style.backgroundPosition = "center "+ -(window.pageYOffset+2)+"px";
		//console.log("moving"+window.pageYOffset);
		},
	Menu: function(){
	alert("not working yet");
		},
		
	checkConnection: function(){
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


    navigator.alert('Connection type: ' + states[networkState]);
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
  	};	
	  	//selectedMenu.value =  localStorage.getItem("catSelected");

var doc_css = document.createElement("link");
	doc_css.setAttribute("type", "text/css");
	doc_css.setAttribute("rel", "stylesheet");
	doc_css.setAttribute("href", "http://m.josue45.com/mobile/final-customcss.php?iduser="+thePath());
	document.getElementsByTagName('head')[0].appendChild(doc_css);
	


app.type = "POST";
app.userId = localStorage.getItem("userId");
app.url = "http://m.josue45.com/class/createFolder.php";
//http://m.josue45.com/class/createFolder.php

var myApp =
{
	x: function(y){
		return xyc = document.getElementById(y); 
		},
		
	setTextNode: function(node, insert){
		this.node	= node
		this.insert = insert;
		},
	textNode: function(){
		var node = document.createTextNode(this.node);
			x(this.insert).appendChild(node);
		}
}
	
var x = function(y){ return xyc = document.getElementById(y); }

function image(imageFilename, node, insert)
	{
		this.imageFilename = imageFilename;
		this.node = node;
		this.insert = insert;
	}

image.prototype.create = function create()
	{
		
		var img = document.createElement("img");
			console.warn(this.imageFilename+this.node);
			img.setAttribute("alt", this.node);
			img.setAttribute("src", this.imageFilename);
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
							var img = new image(data[i].imageFilename, data[i].node, data[i].insert);
							  	img.create();
								break;
								
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
